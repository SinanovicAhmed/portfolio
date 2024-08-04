import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image_light: "url('/images/photoofme_light.png')",
        image_dark: "url('/images/photoofme_dark.png')",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        dark: "#111827", // Set your desired dark background color here
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
