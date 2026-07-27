import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  // Relative assets work both at heliannuuthus.github.io/pallas/ and behind a
  // Cloudflare-backed custom domain without requiring a second build.
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@heliannuuthus/ui/styles.css',
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
      {
        find: /^@heliannuuthus\/ui\/(.+)$/,
        replacement: fileURLToPath(
          new URL('../../src/components/$1.tsx', import.meta.url)
        ),
      },
    ],
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: {
      allow: [fileURLToPath(new URL('../..', import.meta.url))],
    },
  },
});
