/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue"
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          montserrat: ['"Montserrat"', 'sans-serif']
        }
      },
    },
    plugins: [],
    purge: {
      options: {
        safelist: ['bg-black', 'bg-black/100', 'bg-[rgba(0,0,0,1)]'],
      },
    },
  }