/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '2.5rem',
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: '#0789aa',
        subMain: '#0a1338',
        dry: '#1f1f1f',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#e3edf6',
      },
    },
  },

};