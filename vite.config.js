import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Extremely aggressive Vite build configuration for maximum Lighthouse score
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Assume modern browsers for smaller bundles
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.warn'],
      },
      format: {
        comments: false, // Strip all comments to reduce bytes
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['@phosphor-icons/react']
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false, // Disable in production for speed
    assetsInlineLimit: 4096, // Inline small assets directly
  },
  server: {
    port: 5173,
    host: true,
  }
});
