/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik-vinyl': ['Rubik Vinyl', 'sans-serif'],  // Ensure this is correctly defined
      },
    },
  },
  plugins: [],
}

