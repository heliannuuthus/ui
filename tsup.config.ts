import { defineConfig } from 'tsup';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const componentDirectory = fileURLToPath(
  new URL('./src/components/', import.meta.url)
);
const componentEntries = Object.fromEntries(
  readdirSync(componentDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.tsx'))
    .map((entry) => entry.name)
    .sort()
    .map((file) => [
      file.replace(/\.tsx$/, ''),
      fileURLToPath(new URL(`./src/components/${file}`, import.meta.url)),
    ])
);

export default defineConfig({
  entry: {
    ...componentEntries,
    index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    'hooks/use-mobile': fileURLToPath(
      new URL('./src/hooks/use-mobile.ts', import.meta.url)
    ),
    utils: fileURLToPath(new URL('./src/lib/utils.ts', import.meta.url)),
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: true,
  external: ['react', 'react-dom'],
});
