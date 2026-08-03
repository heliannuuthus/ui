import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { heliannuuthusUI } from '@heliannuuthus/ui/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  // Relative assets work both at heliannuuthus.github.io/pallas/ and behind a
  // Cloudflare-backed custom domain without requiring a second build.
  base: './',
  plugins: [heliannuuthusUI(), react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: {
      allow: [fileURLToPath(new URL('../..', import.meta.url))],
    },
  },
});
