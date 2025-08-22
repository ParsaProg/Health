import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B80023",
          light: "#B80023",
        },
      },
      fontFamily: {
        v: ["Vazir", "sans-serif"], // Persian font
        p: ["Poppins", "sans-serif"], // English font
      },
      
    },
  },
  plugins: [],
} satisfies Config;
