import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Não precisamos mais do 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A configuração explícita do css.postcss não é necessária,
  // pois o Vite detecta o postcss.config.js automaticamente.
  // Removendo esta seção, simplificamos e evitamos o erro.
})