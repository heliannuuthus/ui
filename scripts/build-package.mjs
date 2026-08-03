import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { transform } from 'esbuild';

const execute = promisify(execFile);
const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distributionDirectory = resolve(packageRoot, 'dist');
const globalStylesSource = resolve(packageRoot, 'src/styles/globals.css');
const tailwindBinary = resolve(packageRoot, 'node_modules/.bin/tailwindcss');

async function buildStyles() {
  await execute(tailwindBinary, [
    '-i',
    globalStylesSource,
    '-o',
    resolve(distributionDirectory, 'global.css'),
    '--minify',
  ]);
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

await Promise.all([buildStyles(), rewriteRootEntry()]);

globalThis.console.log(
  'Built the tree-shakeable package and static stylesheet.'
);
