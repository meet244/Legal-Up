export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aquire:"Aquire",
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        navy: "#031229",
        lime: "#D4F229",
        neutral: {
          400: "#F4F4F4",
          800: "#3C3C3C",
          900: "#212121",
        },
        background1: "#dce6f4",
        primary: "#3765a9",
        secondary: "#b6cae7",
        accent: "#335e9e",
        homepageCardArrowBg: "#9B9B9B",
        navy: "#031229",
      },
      colors: {
        accent: "#335e9e",
        text1: "#04070c",
        error: "#C81414",
        lime: "white",
        infoBlue: "#3285DA",
        neutral: {
          500: "#D0D0D0",
          600: "#9B9B9B",
          800: "#3C3C3C",
          900: "#212121",
        },
      },
      fontSize: {
        "15px": "15px",
      },
      borderColor: {
        lime: "#D4F229",
        neutral: {
          800: "#3C3C3C",
        },
      },
      outline: {
        lime: "#D4F229",
        neutral: {
          800: "#3C3C3C",
        },
      },

      fill: {
        infoBlue: "#3285DA",
      },
      fontSize: {
        s32: "32px",
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  },
};
