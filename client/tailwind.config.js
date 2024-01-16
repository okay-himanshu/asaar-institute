/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "w-270": "270px",
      "w-300": "300px",
      "w-320": "320px",
      "w-440": "440px",
      "w-500": "500px",
      sm: "640px",
      md: "768px",
      "w-850": "850px",
      lg: "1024px",
      "w-1150": "1150px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        color_gray: "#515151",
        color_light_gray: "#b5b2b1",
        color_white: "#f9f8f8",
        color_black: "#111113",
        color_light_black: "",
        color_yellow: "#ffd700",
        color_sky_blue: "#94a1b7",
      },
    },
  },

  plugins: [],
};
