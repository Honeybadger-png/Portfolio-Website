/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#190021',
        'secondary' : '#5e0c8f',
        'dark-primary' : '#b1acc7',
        'dark-secondary' : '#8110c2',
        'navbar-bg-color' : '#010b19',
        'navbar-txt-color' : '#FFFDF0'
      }
    },
  },
  plugins: [],
}

