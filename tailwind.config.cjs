/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: '#DE76B5',
        'dark-primary': '#0A0A0A',
        'red-variant': '#5A0000',
        'white-variant': '#EEEEEE',
        'gray-variant': '#A0A0A0',
        'black-variant': '#1E1F24'
      },
      backgroundImage: {
        hero: 'url(/src/assets/img/bg.jpg)'
      }
    }
  },
  plugins: []
}
