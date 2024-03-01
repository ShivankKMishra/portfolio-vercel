import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      '@': path.resolve(__dirname, '.'),
      // Add more aliases as needed
    },
  },
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
