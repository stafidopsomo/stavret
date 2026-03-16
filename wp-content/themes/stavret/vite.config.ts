import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: resolve(__dirname, 'assets/src'),
  build: {
    outDir: resolve(__dirname, 'assets/dist'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/src/js/main.tsx'),
        gallery: resolve(__dirname, 'assets/src/js/gallery.tsx'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'assets/src/js'),
    },
  },
});
