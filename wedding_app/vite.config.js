import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/wedding_site/',
  plugins: [react()],
  build: {
    outDir: '../wedding_site',
    emptyOutDir: true,
  },
})
