/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#1e1d85",
      //   secondary: "#0ec6d5",
      //   secondary2: "#17a2b8",
      // },
      // backgroundColor: {
      //   primary: "#1e1d85",
      //   secondary: "#0ec6d5",
      //   secondary2: "#17a2b8",
      // },
      colors: {
        primary: "rgb(44, 99, 253)",
        secondary: "rgb(55 65 81)",
      },
    },
  },
  plugins: [],
};
