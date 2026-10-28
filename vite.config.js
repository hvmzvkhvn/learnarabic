import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import serviceWorker from './build/sw-plugin.js'

// https://vite.dev/config/
// VITE_BASE lets the site live under a sub-path (e.g. /learnurdu/ on github.io) until it has its own domain.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), serviceWorker()],
})
