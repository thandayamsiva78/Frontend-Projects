/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "custome-gray" : "#8080803F",
        "custome-moregray": "#5050503F",
        "custome-green" : "#1DB954",
        "custome-lightgreen" : "#08DA08"
      }
    },
  },
  plugins: [],
}