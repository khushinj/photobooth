import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true, // allows external access (like Cloudflare Tunnel)
    port: 5173, // default Vite port
    allowedHosts: ['reliability-systematic-statutory-sodium.trycloudflare.com']
  }
})
