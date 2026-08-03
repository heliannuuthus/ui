import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const componentDirectory = resolve(packageRoot, 'src/components');
const distributionDirectory = resolve(packageRoot, 'dist');
const styledEntryDirectory = resolve(distributionDirectory, 'styled');

const componentNames = (
  await readdir(componentDirectory, {
    withFileTypes: true,
  })
)
  .filter((entry) => entry.isFile() && entry.name.endsWith('.tsx'))
  .map((entry) => entry.name.replace(/\.tsx$/, ''))
  .sort();

await Promise.all(
  componentNames.flatMap((componentName) => [
    ...['js', 'd.ts', 'css'].map((extension) =>
      access(resolve(distributionDirectory, `${componentName}.${extension}`))
    ),
    access(resolve(styledEntryDirectory, `${componentName}.js`)),
  ])
);
await access(resolve(distributionDirectory, 'theme.css'));
await access(resolve(distributionDirectory, 'global.css'));

const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, 'package.json'), 'utf8')
);
const exportNames = Object.keys(packageJson.exports ?? {});

if (
  exportNames.includes('./*') ||
  exportNames.some(
    (exportName) =>
      exportName !== '.' &&
      exportName !== './vite' &&
      exportName !== './styles.css' &&
      !exportName.startsWith('./_')
  )
) {
  throw new Error(
    'package.json must only expose the root, stylesheet and Vite integration.'
  );
}

if (packageJson.exports['./styles.css'] !== './dist/global.css') {
  throw new Error(
    'The public stylesheet must resolve to the global CSS build.'
  );
}

async function bundleSource(source, exposedName = 'Button') {
  const result = await build({
    absWorkingDir: packageRoot,
    bundle: true,
    format: 'esm',
    minify: true,
    platform: 'browser',
    treeShaking: true,
    write: false,
    outdir: 'bundle-check',
    stdin: {
      contents: `${source}\nglobalThis.__uiExport = ${exposedName};`,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'tree-shaking-check.ts',
    },
    external: ['react', 'react-dom'],
    logLevel: 'silent',
  });

  return Object.fromEntries(
    result.outputFiles.map((output) => [
      output.path.endsWith('.css') ? 'css' : 'js',
      output.contents.byteLength,
    ])
  );
}

const { heliannuuthusUI } = await import(
  resolve(distributionDirectory, 'vite.js')
);
const sourceWithRootButton = [
  "import { useEffect } from 'react';",
  "const example = `import { Missing } from '@heliannuuthus/ui';`;",
  "import { Button } from '@heliannuuthus/ui';",
].join('\n');
const transformedOptimized = heliannuuthusUI().transform(
  sourceWithRootButton,
  resolve(packageRoot, 'tree-shaking-check.ts')
);
const transformedTypes = heliannuuthusUI().transform(
  "import type { ButtonProps } from '@heliannuuthus/ui';",
  resolve(packageRoot, 'type-import-check.ts')
);

if (
  !transformedOptimized ||
  !transformedOptimized.code.includes(
    "`import { Missing } from '@heliannuuthus/ui';`"
  ) ||
  !transformedOptimized.code.includes('@heliannuuthus/ui/_components/button') ||
  transformedOptimized.code.includes('@heliannuuthus/ui/styles.css') ||
  !transformedOptimized.map.mappings
) {
  throw new Error(
    'The Vite plugin did not safely rewrite the optimized Button import.'
  );
}

if (
  !transformedTypes?.code.includes('import type') ||
  transformedTypes.code.includes('@heliannuuthus/ui/styles.css')
) {
  throw new Error('Type-only imports must not load package styles.');
}

const indexSource = await readFile(
  resolve(packageRoot, 'src/index.ts'),
  'utf8'
);
const indexProgram = parse(indexSource, {
  plugins: ['typescript'],
  sourceType: 'module',
}).program;
const publicExports = indexProgram.body.flatMap((statement) =>
  statement.type === 'ExportNamedDeclaration'
    ? statement.specifiers.map((specifier) => ({
        kind:
          statement.exportKind === 'type' || specifier.exportKind === 'type'
            ? 'type'
            : 'value',
        name:
          specifier.exported.type === 'Identifier'
            ? specifier.exported.name
            : specifier.exported.value,
      }))
    : []
);

for (const kind of ['value', 'type']) {
  const names = publicExports
    .filter((entry) => entry.kind === kind)
    .map((entry) => entry.name);
  const source =
    kind === 'type'
      ? `import type { ${names.join(', ')} } from '@heliannuuthus/ui';`
      : `import { ${names.join(', ')} } from '@heliannuuthus/ui';`;
  const transformed = heliannuuthusUI().transform(
    source,
    resolve(packageRoot, `all-${kind}-exports.ts`)
  );

  if (!transformed || transformed.code.includes("from '@heliannuuthus/ui';")) {
    throw new Error(`The Vite plugin did not rewrite every public ${kind}.`);
  }
}

const genericImportSizes = await bundleSource(
  [
    "import '@heliannuuthus/ui/styles.css';",
    "import { Button } from '@heliannuuthus/ui';",
  ].join('\n')
);
const directGlobalSizes = await bundleSource(
  [
    "import '@heliannuuthus/ui/styles.css';",
    "import { Button } from '@heliannuuthus/ui/_internal/components/button';",
  ].join('\n')
);
const optimizedImportSizes = await bundleSource(transformedOptimized.code);
const directComponentSizes = await bundleSource(
  "import { Button } from '@heliannuuthus/ui/_components/button';"
);
const untransformedRootSizes = await bundleSource(
  "import { Button } from '@heliannuuthus/ui';"
);
const allowedRootOverhead = { css: 128, js: 128 };

for (const format of ['js', 'css']) {
  if (
    !genericImportSizes[format] ||
    genericImportSizes[format] >
      directGlobalSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      [
        `The generic root no longer tree-shakes Button ${format.toUpperCase()}.`,
        `Root: ${genericImportSizes[format] ?? 0} bytes.`,
        `Direct component: ${directGlobalSizes[format] ?? 0} bytes.`,
      ].join(' ')
    );
  }

  if (
    !optimizedImportSizes[format] ||
    optimizedImportSizes[format] >
      directComponentSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      `The optional Vite optimization no longer tree-shakes Button ${format.toUpperCase()}.`
    );
  }
}

if (untransformedRootSizes.css) {
  throw new Error(
    'The package root must stay style-free without an explicit integration.'
  );
}

const globalStylesSize = (
  await stat(resolve(distributionDirectory, 'global.css'))
).size;
const componentStylesSize = (
  await Promise.all(
    componentNames.map(async (componentName) => {
      const file = await stat(
        resolve(distributionDirectory, `${componentName}.css`)
      );
      return file.size;
    })
  )
).reduce((total, size) => total + size, 0);

if (globalStylesSize >= componentStylesSize) {
  throw new Error(
    'The deduplicated global stylesheet must stay smaller than component CSS.'
  );
}

globalThis.console.log(
  `Verified ${componentNames.length} component entries, ${publicExports.length} ` +
    `public exports, generic integration and Vite optimization (global CSS: ${globalStylesSize} ` +
    `bytes; component CSS total: ${componentStylesSize} bytes).`
);
