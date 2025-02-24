import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'wiedza': '#444E8D',
        'inspiracje': '#FFBF42',
        'interpretacje': '#D94F4F',
        'dostępne': '#82E49A',
      },
    },
  },
  plugins: [],
} satisfies Config;
