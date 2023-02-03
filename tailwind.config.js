/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url(../src/assets/redberry-bg-main.png)",
      },
      width: {
        326: "326px",
      },
      colors: {
        blue: "#6B40E3",
        lightblue: "#7949FF",
        darkblue: "#512FAF",
        darkgrayblue: "#0E80BF",
        lightgrayblue: "#62A1EB",
        red: "#F93B1D",
        darkred: "#E52F2F",
        lightred: "#EF5050",
        green: "#98E37E",
        darkgray: "#909090",
        gray: "#BCBCBC",
        lightgray: "#F9F9F9",
        offblack: "#1A1A1A",
      },
    },
    fontFamily: {
      helvetica: ["Helvetica Neue, sans-serif"],
    },
  },
  plugins: [],
};
