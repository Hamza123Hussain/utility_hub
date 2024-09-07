/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          200: '#FF6F61',
        },
        electricBlue: {
          400: '#90CEEB',
        },
      },
    },
  },
  plugins: [],
}
