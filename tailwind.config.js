/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-900': '#072B49',
        'yellow-400': '#FFD700',
        'green-400': '#00C7B2',
        'orange-500': '#EB674C',
      },
    },
  },
  plugins: [],
}

