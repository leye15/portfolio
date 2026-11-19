import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' : le site fonctionne à la racine d'un domaine comme dans un sous-dossier (GitHub Pages…)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
