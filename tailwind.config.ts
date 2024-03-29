import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#696bff",
      extraPurple: "#8442FD",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      phosphoras: "#09233a",
      gray: {
        "300": "#c2c0c0",
        "400": "#929292",
        "450": "#686868",
        "500": "#313035",
        "600": "#37363b",
        "699": "#1f1f21",
        "700": "#1f1f22",
        "800": "#131313",
        "850": "#202125",
        "900": "#0e0e0e",
      },
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
