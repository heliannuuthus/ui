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
      !exportName.startsWith('./_')
  )
) {
  throw new Error(
    'package.json must not expose legacy component or stylesheet entries.'
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
const transformedGlobal = heliannuuthusUI().transform(
  sourceWithRootButton,
  resolve(packageRoot, 'tree-shaking-check.ts')
);
const transformedComponents = heliannuuthusUI({
  styles: 'components',
}).transform(
  sourceWithRootButton,
  resolve(packageRoot, 'tree-shaking-check.ts')
);
const transformedTypes = heliannuuthusUI().transform(
  "import type { ButtonProps } from '@heliannuuthus/ui';",
  resolve(packageRoot, 'type-import-check.ts')
);

if (
  !transformedGlobal ||
  !transformedGlobal.code.includes(
    "`import { Missing } from '@heliannuuthus/ui';`"
  ) ||
  !transformedGlobal.code.includes(
    '@heliannuuthus/ui/_internal/styles/global.css'
  ) ||
  !transformedGlobal.code.includes(
    '@heliannuuthus/ui/_internal/components/button'
  ) ||
  !transformedGlobal.map.mappings
) {
  throw new Error(
    'The Vite plugin did not safely rewrite the global-style Button import.'
  );
}

if (
  !transformedComponents?.code.includes(
    '@heliannuuthus/ui/_components/button'
  ) ||
  transformedComponents.code.includes(
    '@heliannuuthus/ui/_internal/styles/global.css'
  )
) {
  throw new Error(
    'The Vite plugin did not preserve opt-in component styles for Button.'
  );
}

if (
  !transformedTypes?.code.includes('import type') ||
  transformedTypes.code.includes(
    '@heliannuuthus/ui/_internal/styles/global.css'
  )
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

const rootImportSizes = await bundleSource(transformedGlobal.code);
const directGlobalSizes = await bundleSource(
  [
    "import '@heliannuuthus/ui/_internal/styles/global.css';",
    "import { Button } from '@heliannuuthus/ui/_internal/components/button';",
  ].join('\n')
);
const componentImportSizes = await bundleSource(transformedComponents.code);
const directComponentSizes = await bundleSource(
  "import { Button } from '@heliannuuthus/ui/_components/button';"
);
const untransformedRootSizes = await bundleSource(
  "import { Button } from '@heliannuuthus/ui';"
);
const allowedRootOverhead = { css: 128, js: 128 };

for (const format of ['js', 'css']) {
  if (
    !rootImportSizes[format] ||
    rootImportSizes[format] >
      directGlobalSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      [
        `The global-style root no longer tree-shakes Button ${format.toUpperCase()}.`,
        `Root: ${rootImportSizes[format] ?? 0} bytes.`,
        `Direct component: ${directGlobalSizes[format] ?? 0} bytes.`,
      ].join(' ')
    );
  }

  if (
    !componentImportSizes[format] ||
    componentImportSizes[format] >
      directComponentSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      `The opt-in component strategy no longer tree-shakes Button ${format.toUpperCase()}.`
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
    `public exports and both style strategies (global CSS: ${globalStylesSize} ` +
    `bytes; component CSS total: ${componentStylesSize} bytes).`
);
