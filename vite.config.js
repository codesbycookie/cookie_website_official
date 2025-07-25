/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  plugins: [react(), tailwindcss(),viteCompression({
  algorithm: 'brotliCompress',
  ext: '.br',
}), visualizer({open: true})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['clsx', 'tailwind-merge'],
  },
  build: {
  cssCodeSplit: true,
  minify: 'esbuild',
},

});
