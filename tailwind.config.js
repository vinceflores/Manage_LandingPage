/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grayBlue': "hsl(227, 12%, 61%)", 
        'very_darkBlue': "hsl(233, 12%, 13%)", 
        'darkBlue': "hsl(228, 39%, 23%)", 
        'brightRed': "hsl(12, 88%, 59%)", 
        'paleRed': "hsl(13, 100%, 96%)", 
        'lightGray': "hsl(13, 100%, 96%)"
      }, 
      fontFamily: {
        'vietnam': ['Be Vietnam Pro']
      }
    },
  },
  plugins: [],
}

