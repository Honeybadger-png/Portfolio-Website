/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fill:{
      current: 'currentColor',
    },
    extend: {
      fontFamily: {
        audiowide: ["Audiowide","serif"]
      },
      colors:{
        'primary' : '#FF4500',
        'secondary' : '#00FFFF',
        'accent' : '#FF00FF',
        'neon-pink': '#FF1493',
        'pure-black': '#000000',
        'dark-gray': '#121212',
        'text-soft': '#EAEAEA',
        'text-light': '#FFFFFF',
        'navbar-bg-color' : '#010b19',
        'navbar-txt-color' : '#FFFDF0'
      }
    },
  },
  plugins: [],
}

