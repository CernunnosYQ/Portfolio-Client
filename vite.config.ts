import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cernunnosyq.github.com/Portfolio-Client",
  build: {
    outDir: 'build'
  },
  plugins: [react()],
})
