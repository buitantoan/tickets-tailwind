const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      main    : '#F8F5E9',
      primary : '#306F5E',
      secondary: '#ecc94b',
      active  : '#F7D86F',
      blue: '#1fb6ff',
      select: '#EAF1EF',
      white : colors.white,
      black: colors.black,
      gray : colors.gray,
      
    },
    extend: {},
  },
  plugins: [],
}
