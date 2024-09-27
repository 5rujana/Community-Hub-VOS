const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        serif: ['Roboto'],
      },
      colors: {
        'orange' : '#FF7426',
        'gray': '#8A8A8A',
        'pink' : '#FEB8F0',
        'yellow' : '#FFF0DB',
        'yellow1' : '#FEEBDD',
        'yellow2' : '#FFE6DF',
        'yellow3' : '#FFE1E1',
        'gray1' : '#444553',
      },
      spacing: {
        '30' : '8.5rem',
        '54' : '14rem',
        '81': '21rem',
        '86' : '23rem',
        '98' : '26rem',
        '99' : '28rem',
        '100': '32rem',
        '120' : '36rem',
        '140' : '43rem',
        '160' : '55rem',
        '162' : '60rem'
      }
    },
  },
  plugins: [],
});