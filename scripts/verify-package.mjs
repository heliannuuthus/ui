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
    ['js', 'd.ts'].map((extension) =>
      access(resolve(distributionDirectory, `${componentName}.${extension}`))
    )
  )
);

const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, 'package.json'), 'utf8')
);
const wildcardExport = packageJson.exports?.['./*'];

if (
  wildcardExport?.import !== './dist/*.js' ||
  wildcardExport?.types !== './dist/*.d.ts'
) {
  throw new Error(
    'package.json must expose generated component entries through the ./* export.'
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
    stdin: {
      contents: `${source}\nglobalThis.__uiButton = Button;`,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'tree-shaking-check.ts',
    },
    external: ['react', 'react-dom'],
    logLevel: 'silent',
  });

  return result.outputFiles[0].contents.byteLength;
}

const rootImportSize = await bundleButton(
  "import { Button } from '@heliannuuthus/ui';"
);
const subpathImportSize = await bundleButton(
  "import { Button } from '@heliannuuthus/ui/button';"
);
const allowedRootOverhead = 128;

if (rootImportSize > subpathImportSize + allowedRootOverhead) {
  throw new Error(
    [
      'The package root no longer tree-shakes to the selected component.',
      `Root Button bundle: ${rootImportSize} bytes.`,
      `Subpath Button bundle: ${subpathImportSize} bytes.`,
    ].join(' ')
  );
}

globalThis.console.log(
  `Verified ${componentNames.length} component entries and root tree-shaking ` +
    `(Button: ${rootImportSize} bytes; subpath: ${subpathImportSize} bytes).`
);
