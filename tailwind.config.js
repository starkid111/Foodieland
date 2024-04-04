
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens : {
      sm: '470px',
      md: '850px',
      lg :'1280px',
      xl :'1440px'
    },
    extend: {},
  },
  plugins: [],
}