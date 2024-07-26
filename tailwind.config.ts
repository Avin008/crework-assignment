import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #FFFFFF, #AFA3FF)",
        "form-gradient": "linear-gradient(to bottom, #F7F7F7, #F0F0F0)",
        "form-button": "linear-gradient(to bottom, #4C38C2, #2F2188)",
      },
    },
  },
  plugins: [],
};
export default config;
