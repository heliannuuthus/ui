import { execFile } from 'node:child_process';
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from 'node:fs/promises';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { build, transform } from 'esbuild';

const execute = promisify(execFile);
const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const componentDirectory = resolve(packageRoot, 'src/components');
const distributionDirectory = resolve(packageRoot, 'dist');
const styledEntryDirectory = resolve(distributionDirectory, 'styled');
const globalStylesSource = resolve(packageRoot, 'src/styles/globals.css');
const themeSource = resolve(packageRoot, 'src/styles/theme.css');
const tailwindBinary = resolve(packageRoot, 'node_modules/.bin/tailwindcss');
const styleConcurrency = 8;

const componentNames = (
  await readdir(componentDirectory, {
    withFileTypes: true,
  })
)
  .filter((entry) => entry.isFile() && entry.name.endsWith('.tsx'))
  .map((entry) => entry.name.replace(/\.tsx$/, ''))
  .sort();

function toCssPath(path) {
  return path.split(sep).join('/');
}

async function componentSources(componentName) {
  const entryPoint = resolve(componentDirectory, `${componentName}.tsx`);
  const result = await build({
    absWorkingDir: packageRoot,
    bundle: true,
    entryPoints: [entryPoint],
    format: 'esm',
    logLevel: 'silent',
    metafile: true,
    packages: 'external',
    platform: 'browser',
    write: false,
  });

  return Object.keys(result.metafile.inputs)
    .map((input) => resolve(packageRoot, input))
    .filter(
      (input) =>
        input.startsWith(`${packageRoot}${sep}`) && /\.(?:ts|tsx)$/.test(input)
    )
    .sort();
}

async function compileStyles(componentName, temporaryDirectory) {
  const inputPath = resolve(temporaryDirectory, `${componentName}.css`);
  const sources = await componentSources(componentName);
  const input = [
    `@reference '${toCssPath(relative(temporaryDirectory, themeSource))}';`,
    "@import 'tailwindcss/utilities.css' layer(utilities) source(none);",
    ...sources.map(
      (source) =>
        `@source '${toCssPath(relative(temporaryDirectory, source))}';`
    ),
    '',
  ].join('\n');

  await writeFile(inputPath, input);
  await execute(tailwindBinary, [
    '-i',
    inputPath,
    '-o',
    resolve(distributionDirectory, `${componentName}.css`),
    '--minify',
  ]);

  await writeFile(
    resolve(styledEntryDirectory, `${componentName}.js`),
    [
      "import '../theme.css';",
      `import '../${componentName}.css';`,
      `export * from '../${componentName}.js';`,
      '',
    ].join('\n')
  );
}

async function rewriteRootEntry() {
  const source = await readFile(resolve(packageRoot, 'src/index.ts'), 'utf8');
  const rewrittenSource = source
    .replaceAll(/from '\.\/components\/([^']+)'/g, "from './$1.js'")
    .replaceAll("from './hooks/use-mobile'", "from './hooks/use-mobile.js'")
    .replaceAll("from './lib/utils'", "from './utils.js'");
  const result = await transform(rewrittenSource, {
    format: 'esm',
    loader: 'ts',
    sourcefile: 'src/index.ts',
    target: 'es2020',
  });

  await writeFile(resolve(distributionDirectory, 'index.js'), result.code);
}

await execute(tailwindBinary, [
  '-i',
  themeSource,
  '-o',
  resolve(distributionDirectory, 'theme.css'),
  '--minify',
]);
await execute(tailwindBinary, [
  '-i',
  globalStylesSource,
  '-o',
  resolve(distributionDirectory, 'global.css'),
  '--minify',
]);

const temporaryDirectory = await mkdtemp(
  resolve(packageRoot, '.component-styles-')
);

try {
  await mkdir(styledEntryDirectory, { recursive: true });

  for (
    let index = 0;
    index < componentNames.length;
    index += styleConcurrency
  ) {
    await Promise.all(
      componentNames
        .slice(index, index + styleConcurrency)
        .map((componentName) =>
          compileStyles(componentName, temporaryDirectory)
        )
    );
  }
} finally {
  await rm(temporaryDirectory, { force: true, recursive: true });
}

await rewriteRootEntry();

globalThis.console.log(
  `Built automatic styles for ${componentNames.length} component entries.`
);
