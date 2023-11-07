import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff6e9",
        background_gray: "#333333",
        signature_orange: "#FB9B0D",
        signature_brown: "#66481A",
        main_color: "#F3B744",
        primary-yellow: "rgba(255,246,233)",
        primary-black: "rgba(51,51,51)",
        primary-orange: "rgba(251,155,13)",
      },
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
