/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aqui poderemos adicionar nossas cores customizadas no futuro,
      // para usar nomes como 'bg-azul-eletrico'.
      colors: {
        'azul-eletrico': '#0074E4',
        'verde-menta': '#24C9A0',
        'roxo-prisma': '#7D3FD1',
        'cinza-claro': '#F2F4F8',
      }
    },
  },
  plugins: [],
}