/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./JS/main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/daisyui/dist/**/*.js", 
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};