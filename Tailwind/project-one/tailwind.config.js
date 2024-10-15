/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom blue color
        secondary: '#9333EA',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}