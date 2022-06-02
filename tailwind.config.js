const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
