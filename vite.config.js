import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3/movie/11', // Specify your API server URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    cors: true,
  }
})
