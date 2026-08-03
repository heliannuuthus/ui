import { defineConfig } from 'tsup';
import { readFileSync, readdirSync } from 'node:fs';
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
const publicImportMap = Object.fromEntries(
  [
    ...readFileSync(
      fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      'utf8'
    ).matchAll(
      /export\s*\{([\s\S]*?)\}\s*from\s*'(\.\/(?:components|hooks|lib)\/[^']+)'/g
    ),
  ].flatMap((match) => {
    const modulePath = match[2]
      .replace('./components/', '_components/')
      .replace('./hooks/', '_internal/hooks/')
      .replace('./lib/utils', '_internal/utils');

    return match[1]
      .split(',')
      .map((specifier) => specifier.trim().replace(/^type\s+/, ''))
      .filter(Boolean)
      .map((specifier) => {
        const [imported, exported = imported] = specifier.split(/\s+as\s+/);
        return [exported, { imported, modulePath }];
      });
  })
);

export default defineConfig({
  entry: {
    ...componentEntries,
    index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    'hooks/use-mobile': fileURLToPath(
      new URL('./src/hooks/use-mobile.ts', import.meta.url)
    ),
    utils: fileURLToPath(new URL('./src/lib/utils.ts', import.meta.url)),
    vite: fileURLToPath(new URL('./src/vite.ts', import.meta.url)),
  },
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  external: ['react', 'react-dom'],
  define: {
    __HELIANNUUTHUS_UI_IMPORTS__: JSON.stringify(publicImportMap),
  },
});
