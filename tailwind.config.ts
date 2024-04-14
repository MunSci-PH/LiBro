import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15803d",

          secondary: "#166534",

          accent: "#22c55e",

          neutral: "#44403c",

          "base-100": "#292524",

          info: "#06b6d4",

          success: "#4ade80",

          warning: "#fb923c",

          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
