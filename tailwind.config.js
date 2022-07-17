const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#fc7753',
        background: { dark: '#1e1e1e', light: '#F5F5F5' },
        container: { dark: '#2d2d2d', light: '#ffffff' },
        text: { dark: '#ffffff', light: '#1e1e1e' },
        sidebar: {
          active: { dark: '#ffffff', light: '#1e1e1e' },
          inactive: { dark: '#3e3e3e', light: '#d6d6d6' },
        },
        overlay: 'rgba(0,0,0,0.8)',
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
    },
  },
  plugins: [],
};
