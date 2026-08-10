import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { parse } from '@babel/parser';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const componentDirectory = resolve(packageRoot, 'src/components');
const distributionDirectory = resolve(packageRoot, 'dist');
const maximumGzipStylesSize = 36 * 1024;

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
await access(resolve(distributionDirectory, 'global.css'));

const distributionEntries = await readdir(distributionDirectory);
const unexpectedStyleEntries = distributionEntries.filter(
  (entry) => entry.endsWith('.css') && entry !== 'global.css'
);

if (unexpectedStyleEntries.length > 0) {
  throw new Error(
    `Only the deduplicated global stylesheet may be published: ${unexpectedStyleEntries.join(', ')}`
  );
}

if (distributionEntries.includes('vite.js')) {
  throw new Error('The package must not contain a build-tool-specific plugin.');
}

const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, 'package.json'), 'utf8')
);
const exportNames = Object.keys(packageJson.exports ?? {});

if (
  exportNames.length !== 2 ||
  !exportNames.includes('.') ||
  !exportNames.includes('./styles.css')
) {
  throw new Error(
    'package.json must expose only the component root and static stylesheet.'
  );
}

if (packageJson.exports['./styles.css'] !== './dist/global.css') {
  throw new Error(
    'The public stylesheet must resolve to the global CSS build.'
  );
}

if (
  !Array.isArray(packageJson.sideEffects) ||
  !packageJson.sideEffects.includes('**/*.css')
) {
  throw new Error('Published CSS must be marked as a package side effect.');
}

const bundleSource = async (source, exposedName = 'Button') => {
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
};

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

if (publicExports.length === 0) {
  throw new Error('The package root must expose public components and types.');
}

const removedPublicExports = new Set([
  'Calendar',
  'Field',
  'Label',
  'NativeSelect',
  'NativeSelectOption',
  'NativeSelectProps',
  'Sheet',
  'SheetProps',
  'Sidebar',
  'useSidebar',
]);
const retainedRemovedExports = publicExports
  .map((entry) => entry.name)
  .filter((name) => removedPublicExports.has(name));

if (retainedRemovedExports.length > 0) {
  throw new Error(
    `Consolidated compatibility exports must stay private: ${retainedRemovedExports.join(', ')}`
  );
}

const genericImportSizes = await bundleSource(
  [
    "import '@heliannuuthus/ui/styles.css';",
    "import { Button } from '@heliannuuthus/ui';",
  ].join('\n')
);
const directImportSizes = await bundleSource(
  [
    "import './dist/global.css';",
    "import { Button } from './dist/button.js';",
  ].join('\n')
);
const unstyledRootSizes = await bundleSource(
  "import { Button } from '@heliannuuthus/ui';"
);
const allowedRootOverhead = { css: 128, js: 128 };

for (const format of ['js', 'css']) {
  if (
    !genericImportSizes[format] ||
    genericImportSizes[format] >
      directImportSizes[format] + allowedRootOverhead[format]
  ) {
    throw new Error(
      [
        `The public root no longer tree-shakes Button ${format.toUpperCase()}.`,
        `Root: ${genericImportSizes[format] ?? 0} bytes.`,
        `Direct component: ${directImportSizes[format] ?? 0} bytes.`,
      ].join(' ')
    );
  }
}

if (unstyledRootSizes.css) {
  throw new Error(
    'The JavaScript root must stay style-free without the explicit stylesheet.'
  );
}

const globalStyles = await readFile(
  resolve(distributionDirectory, 'global.css')
);
const globalStylesGzipSize = gzipSync(globalStyles, { level: 9 }).byteLength;

if (globalStylesGzipSize > maximumGzipStylesSize) {
  throw new Error(
    `The stylesheet exceeds the ${maximumGzipStylesSize}-byte gzip budget: ${globalStylesGzipSize} bytes.`
  );
}

globalThis.console.log(
  `Verified ${componentNames.length} component entries, ${publicExports.length} ` +
    `public exports and static CSS (${globalStyles.byteLength} bytes raw; ` +
    `${globalStylesGzipSize} bytes gzip).`
);
