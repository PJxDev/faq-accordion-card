/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '767px' },
      'md': '768px',
    },
    colors: {
      veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
      softRed: "hsl(14, 88%, 65%)",
      softViolet: "hsl(273, 75%, 66%)",
      softBlue: "hsl(240, 73%, 65%)",
      veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
      darkGrayishBlue: "hsl(240, 6%, 50%)",
      lightGrayishBlue: "hsl(240, 5%, 91%)",
    },
    fontFamily: {
      body: ['"Kumbh Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}