import type { Config } from "tailwindcss";

export default {
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
        yelly: "var(--yelly)",
        "soft-yelly": "var(--soft-yelly)",
        "light-yelly": "var(--light-yelly)",
        gold: "var(--gold)",
        "muted-yelly": "var(--muted-yelly)",
        "pure-black": "var(--pure-black)",
        "soft-black": "var(--soft-black)",
        "dark-gray": "var(--dark-gray)",
        "graphite-gray": "var(--graphite-gray)",
        "off-black": "var(--off-black)",
        white: "var(--white)",
        winny: "var(--winny)",
        "soft-wine": "var(--soft-wine)",
        "light-wine": "var(--light-wine)",
        "muted-wine": "var(--muted-wine)",
      },
    },
  },
  plugins: [],
} satisfies Config;
