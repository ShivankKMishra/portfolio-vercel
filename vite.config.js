import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      compress: {
        // Disable warnings about the use of eval
        warnings: false,
        // other compress options...
      },
    },
  },
})
