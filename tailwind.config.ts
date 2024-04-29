import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        background: "#F8F8F6",
        text: "#191410",
        textSecondary: "#D4964F",
        textHover: "#672013",
      },
    },
  },
  plugins: [],
}
export default config
