/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}

