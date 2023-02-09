/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '3px': '3px',
        '5px': '5px',
        '7px': '7px',
        '17px': '17px',
        '22px': '22px',
        '25px': '25px',
        '30px': '30px',
        '60px': '60px',
        '140px': '140px',
        '170px': '170px',
        // '220px': '220px',
        '0.7em': '0.7em',
        '3%': '3%',
        '10%': '10%',
        '65%': '65%',
        '78%': '78%',
        '95%': '95%',
      },
      boxShadow: {
        'header': '1px 2px 11px -2px rgba(0,0,0, 0.84)',
      },
      borderWidth: {
        '40': '40px',
        '25': '25px',
      },
      borderRadius: {
        '10px': '10px',
      },
      letterSpacing: {
        'def': '0.5px',
      },
      minWidth: {
        '215px': '215px',
      },
    },
  },
  plugins: [],
}
