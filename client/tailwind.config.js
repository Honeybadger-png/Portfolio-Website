/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'navbar-bg-color' : '#010b19',
        'navbar-txt-color' : '#FFFDF0'
      }
    },
  },
  plugins: [],
}

