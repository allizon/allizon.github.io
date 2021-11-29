const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["docs/**/*.html", "docs/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
