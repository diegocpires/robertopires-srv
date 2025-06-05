/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0f2fe',
          DEFAULT: '#38bdf8',
          dark: '#0284c7'
        },
        secondary: '#f1f5f9'
      }
    }
  },
  plugins: [],
};
