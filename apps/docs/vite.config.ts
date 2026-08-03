import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(async ({ command }) => {
  const development = command === 'serve';
  const uiPlugin = development
    ? []
    : [(await import('@heliannuuthus/ui/vite')).heliannuuthusUI()];

  return {
    // Relative assets work both at heliannuuthus.github.io/pallas/ and behind a
    // Cloudflare-backed custom domain without requiring a second build.
    base: './',
    plugins: [...uiPlugin, react(), tailwindcss()],
    resolve: {
      alias: development
        ? [
            {
              find: '@heliannuuthus/ui/_internal/styles/global.css',
              replacement: fileURLToPath(
                new URL('../../src/styles/globals.css', import.meta.url)
              ),
            },
            {
              find: '@heliannuuthus/ui',
              replacement: fileURLToPath(
                new URL('../../src/index.ts', import.meta.url)
              ),
            },
          ]
        : [],
      dedupe: ['react', 'react-dom'],
    },
    server: {
      fs: {
        allow: [fileURLToPath(new URL('../..', import.meta.url))],
      },
    },
  };
});
