import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],

  server: {
    hmr: true ,// Explicitly enabling HMR
    watch: {
         usePolling: false, // Enable polling for file changes
       },
  }
})
