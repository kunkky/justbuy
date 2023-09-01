/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
        colors: {
        'justbuy-purple': '#660B7F', 
        'justbuy-black':'#0C000F',
        'justbuy-brown': '#E07575',
        'justbuy-star': '#FFAD33',
        },
    },
  },
  plugins: [],
}

