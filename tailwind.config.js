/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "420px" },

      sm: "640px",

      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "3px": "3px",
        "5px": "5px",
        "7px": "7px",
        "17px": "17px",
        "22px": "22px",
        "25px": "25px",
        "30px": "30px",
        "60px": "60px",
        "140px": "140px",
        "170px": "170px",
        "700px": "700px",
        "0.7em": "0.7em",
        "3%": "3%",
        "10%": "10%",
        "65%": "65%",
        "78%": "78%",
        "95%": "95%",
      },
      boxShadow: {
        header: "1px 2px 11px -2px rgba(0,0,0, 0.84)",
      },
      borderWidth: {
        40: "40px",
        25: "25px",
      },
      borderRadius: {
        "10px": "10px",
      },
      letterSpacing: {
        def: "0.5px",
      },
      minWidth: {
        "215px": "215px",
      },
      minHeight: {
        "250px": "250px",
      },
      colors: {
        gray: "rgb(32,35,36)",
        // "dark-gray": "rgb(30,30,30)",
        "dark-gray": "rgb(24,26,27)",
        // "darker-gray": "rgb(20,20,20)",
        "darker-gray": "rgb(14,15,15)",
        "fuchsia-icon": "rgb(196,36,255)",
        "blue-icon": "rgb(28,108,255)",
      },
    },
  },
  plugins: [],
};
