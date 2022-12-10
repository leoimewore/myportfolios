/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Space+Grotesk":['Space Grotesk', "sans-serif"]
      },
      backgroundSize:{
        "10%":"20%",
        "16%":"4rem"
      },
      backgroundPosition:{
       "top-left":"left 2%"
      },
      colors:{
        "smoky-white":"#d9d9d9",
        "light-gray":"#000000b3"
      },
      spacing:{
        "45":"45%"
      },
      textUnderlineOffset: {
        "5": '5px',
      }

    },
  },
  plugins: [],
}