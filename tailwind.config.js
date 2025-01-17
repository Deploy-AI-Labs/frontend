/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#181828",
          50: "#353551",
          100: "#272742",
          150: "#25253F",
          200: "#2A2A49",
          250: "#1E1E33",
          300: "#1F1F35",
          350: "#30324A",
          400: "#161623",
          450: "#070010",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          50: "#C7CAFC",
          100: "#B6B8D2",
          150: "#D9D9D9",
        },
        primary: {
          DEFAULT: "#03FF94",
          50: "#00FBFF",
          100: "#254639",
          150: "#1E332B",
          200: "#2BBD7F",
        },
        secondary: {
          DEFAULT: "#FFEE6A",
          50: "#B7FF6A",
          100: "#282A13",
          150: "#2D331E",
          200: "#33281E",
        },
        muted: {
          DEFAULT: "#828397",
          50: "#6F6FA8",
        },
      },
      fontFamily: {
        heading: '"Anta", serif',
        paragraph: '"Albert Sans", serif',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatReverse: "floatReverse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
