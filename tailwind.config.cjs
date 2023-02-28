/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DE76B5',
        'dark-primary': '#0A0A0A',
        'red-variant': '#5A0000',
        'white-variant': '#EEEEEE',
        'gray-variant': '#A0A0A0',
        'black-variant': '#000000',
      },
    },
  },
  plugins: [],
}
