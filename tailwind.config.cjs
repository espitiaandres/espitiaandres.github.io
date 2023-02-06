/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        80: "20rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#269441",
          "primary-light": "EBFFFF",
          secondary: "#1ED760",
          accent: "#1FB2A6",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
