/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#757575',
        customViolet: '#a445ed',
        backGroundDark: '#050505',
        searchText: '#c2c2c2',
        lightGray: '#e9e9e9',
        wordSearchInput: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
