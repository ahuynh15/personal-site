const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover) and (pointer: fine)' },
      },
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        5: '5px',
      },
      boxShadow: {
        'solid-6': '6px 6px 0px rgb(0 0 0 / 0.3)',
        'solid-2': '2px 2px 0px rgb(0 0 0 / 0.3)',
      },
      dropShadow: {
        'solid-2': '2px 2px 0px rgb(0 0 0 / 0.3)',
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
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
