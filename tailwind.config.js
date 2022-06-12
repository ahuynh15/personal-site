const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#272727',
      },
      fontFamily: {
        sans: ['Questrial', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
