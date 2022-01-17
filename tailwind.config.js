module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#107aca',
        second: '#324E65'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
