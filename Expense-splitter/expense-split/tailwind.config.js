/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow': "0px 0px 8px rgba(0, 0, 0,0.2)",
      },
    },
  },
  plugins: [],
}