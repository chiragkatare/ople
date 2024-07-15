/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },


      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      }),
      // fontSize{
      //   '3xl':['calc((var(--heading-3-size-value) - 1) * 1.2vw + 1rem)',],
      // },
      fontSize: {
        'h3': [
          'calc(0.5 * 1.2vw + 1rem)', 'calc(1.2em * (1 + (1 - 1.5em)/25))'
        ],
        'h1': [
          'calc(2.6 * 1.2vw + 1rem)', 'calc(1.2em * (1 + (1 - 1.5em)/25))'
        ],

        'h2': [
          'calc(1 * 1.2vw + 1rem);'
        ],
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