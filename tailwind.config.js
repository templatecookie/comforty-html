/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}",
    "index.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
            display: ["'Inter', sans-serif"],
        },
        container: {
            center: true,
            padding: '0rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '920px',
                xl: '980px',
                '2xl': '1320px',
            },
        },
        colors: {
        },
  },
  plugins: [],
}
