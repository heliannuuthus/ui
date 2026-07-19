import { defineConfig } from 'tsup';
import { readdirSync } from 'node:fs';

const componentEntries = Object.fromEntries(
  readdirSync('src/components')
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => [file.replace(/\.tsx$/, ''), `src/components/${file}`]),
);

export default defineConfig({
  entry: {
    ...componentEntries,
    'hooks/use-mobile': 'src/hooks/use-mobile.ts',
    utils: 'src/lib/utils.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: true,
  external: ['react', 'react-dom'],
});
