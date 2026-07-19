import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative assets work both at heliannuuthus.github.io/pallas/ and behind a
  // Cloudflare-backed custom domain without requiring a second build.
  base: './',
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
});
