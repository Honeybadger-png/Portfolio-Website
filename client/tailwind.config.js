/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide","serif"]
      },
      colors:{
        'primary' : '#8A2BE2',
        'secondary' : '#00FFFF',
        'accent' : '#FF00FF',
        'cyber-orange' : '#FF4500',
        'neon-pink': '#FF1493',
        'pure-black': '#000000',
        'dark-gray': '#121212',
        'text-soft': '#EAEAEA',
        'text-light': '#CCCCCC',
        'navbar-bg-color' : '#010b19',
        'navbar-txt-color' : '#FFFDF0'
      }
    },
  },
  plugins: [],
}

