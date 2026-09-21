import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/minigames-landing/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        library: resolve(__dirname, 'library.html'),
      },
    },
  },
});
