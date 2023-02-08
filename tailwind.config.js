/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url(../src/assets/redberry-bg-main.png)",
      },
      width: {
        798: "798px",
        151: "151px",
        289: "289px",
      },
      height: {
        103: "103px",
        123: "123px",
        179: "179px",
        48: "48px",
      },
      boxShadow: {
        shadow: "0px 4px 28px rgba(0, 0, 0, 0.25)",
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
        textgray: "#2E2E2E",
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
