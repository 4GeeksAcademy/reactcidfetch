import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/todo': {
        target: 'https://playground.4geeks.com',
        changeOrigin: true,
        secure: false,
        // ¡Elimina la reescritura (rewrite)!
      },
    },
  },
});
