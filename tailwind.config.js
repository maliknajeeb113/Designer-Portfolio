/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow:{
        neu: '-8px -6px 15px #fff, 6px 8px 15px rgba(0, 0, 0, 0.15)',
        'neu-i': 'inset -8px -6px 15px #fff, inset 6px 8px 15px rgba(0, 0, 0, 0.15)',
      },
      backgroundColor:{
        primary: 'rgb(241, 241, 241)'
      }
    },
  },
  plugins: [],
}