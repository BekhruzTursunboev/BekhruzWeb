import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Extremely aggressive Vite build configuration for maximum Lighthouse score
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    sourcemap: false, // Disable in production for speed
    assetsInlineLimit: 4096, // Inline small assets directly
  },
  server: {
    port: 5173,
    host: true,
  }
});
