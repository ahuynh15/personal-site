const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        5: '5px',
      },
      boxShadow: {
        'solid-6': '6px 6px 0px rgb(0 0 0 / 0.2)',
        'solid-2': '2px 2px 0px rgb(0 0 0 / 0.2)',
      },
      dropShadow: {
        'solid-2': '2px 2px 0px rgb(0 0 0 / 0.2)',
      },
      gridTemplateColumns: {
        '2-auto': 'auto minmax(0, 1fr)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem',
      },
    },
  },
  plugins: [],
};
