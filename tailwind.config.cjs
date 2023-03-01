/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exoSpace: ['Exo Space', 'sans-serif'],
        cyborg: ['Cyborg', 'sans-serif'],
      }
    },
  },
  plugins: [],
}