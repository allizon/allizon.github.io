const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["docs/**/*.html", "docs/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
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
