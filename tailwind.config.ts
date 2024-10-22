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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom colors for orange background and aqua buttons
        orange: {
          500: "#f97316", // Customize this value to match the orange you want
        },
        aqua: {
          500: "#00FFFF", // Aqua shade for the buttons
          600: "#00CED1", // Darker shade on hover
        },
      },
    },
  },
  plugins: [],
};

export default config;
