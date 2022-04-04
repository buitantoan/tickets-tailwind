const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
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
      blue : colors.blue,
      light: colors.light,
    },
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  
  ],
}
