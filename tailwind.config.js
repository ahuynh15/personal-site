const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Questrial', ...defaultTheme.fontFamily.sans],
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
      },
    },
  },
  plugins: [],
};
