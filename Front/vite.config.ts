// Front/vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [tailwindcss(), tsconfigPaths()],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Garante que a pasta dist seja limpa antes do build
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Opcional: pode ajudar a isolar código problemático, mas vamos focar na substituição
          // if (id.includes('axios')) {
          //   return 'vendor-axios';
          // }
        }
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  define: {
    // Mantemos a definição da variável global
    __BACKEND_BASE_URL__: process.env.NODE_ENV === 'production'
      ? JSON.stringify('/api') // URL de produção
      : JSON.stringify('http://localhost:8000') // URL de desenvolvimento
  }
})
