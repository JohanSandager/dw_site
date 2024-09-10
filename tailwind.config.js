/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'primary': '#96151E',
      'secondary': '#F4DEB3',
    },
    extend: {
      'dw-img': "url('/public/DW_logo_transparent.png')"
    },
  },
  plugins: [],
}