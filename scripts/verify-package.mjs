import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const componentDirectory = resolve(packageRoot, 'src/components');
const distributionDirectory = resolve(packageRoot, 'dist');

const componentNames = (
  await readdir(componentDirectory, {
    withFileTypes: true,
  })
)
  .filter((entry) => entry.isFile() && entry.name.endsWith('.tsx'))
  .map((entry) => entry.name.replace(/\.tsx$/, ''))
  .sort();

await Promise.all(
  componentNames.flatMap((componentName) =>
    ['js', 'd.ts', 'css'].map((extension) =>
      access(resolve(distributionDirectory, `${componentName}.${extension}`))
    )
  )
);
await access(resolve(distributionDirectory, 'theme.css'));

const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, 'package.json'), 'utf8')
);
const exportNames = Object.keys(packageJson.exports ?? {});

if (
  exportNames.includes('./*') ||
  exportNames.includes('./styles.css') ||
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

async function bundleButton(source) {
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
      contents: `${source}\nglobalThis.__uiButton = Button;`,
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
const transformed = heliannuuthusUI().transform(
  [
    "import { useEffect } from 'react';",
    "const example = `import { Missing } from '@heliannuuthus/ui';`;",
    "import { Button } from '@heliannuuthus/ui';",
  ].join('\n'),
  resolve(packageRoot, 'tree-shaking-check.ts')
);

if (
  !transformed ||
  !transformed.code.includes(
    "`import { Missing } from '@heliannuuthus/ui';`"
  ) ||
  !transformed.code.includes('@heliannuuthus/ui/_components/button')
) {
  throw new Error(
    'The Vite plugin did not safely rewrite the root Button import.'
  );
}

const rootImportSizes = await bundleButton(transformed.code);
const directImportSizes = await bundleButton(
  "import { Button } from '@heliannuuthus/ui/_components/button';"
);
const allowedRootOverhead = { css: 128, js: 128 };

for (const format of ['js', 'css']) {
  if (
    !rootImportSizes[format] ||
    rootImportSizes[format] >
      directImportSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      [
        `The package root no longer tree-shakes Button ${format.toUpperCase()}.`,
        `Root: ${rootImportSizes[format] ?? 0} bytes.`,
        `Direct component: ${directImportSizes[format] ?? 0} bytes.`,
      ].join(' ')
    );
  }
}

globalThis.console.log(
  `Verified ${componentNames.length} automatic component entries and root ` +
    `import rewriting (Button JS: ${rootImportSizes.js} bytes; CSS: ` +
    `${rootImportSizes.css} bytes).`
);
