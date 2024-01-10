/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_gray: "#515151",
        color_light_gray: "#b5b2b1",
        color_white: "#f9f8f8",
        color_black: "#322e32",
        color_light_black: "",
        color_yellow: "#ffd700",
        color_sky_blue: "#94a1b7",
      },
    },
  },
  plugins: [],
};
