import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// Convert current module URL to directory path (modern ESM alternative to __dirname)
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Base public path for GitHub Pages deployment
  base: '/minigames-landing/',
  build: {
    rollupOptions: {
      input: {
        // Multi-page entry points
        main: resolve(__dirname, 'index.html'),
        library: resolve(__dirname, 'library.html'),
      },
    },
  },
});
