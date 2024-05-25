import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        texturesPapyrus: "url('/asfalt-light.png')",
        mennecyCover: "url('/mennecyCover.webp')",
        varianceCover: "url('/variances-cover.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        background: "#F8F8F6",
        text: "#0a0a0a",
        textSecondary: "#D4964F",
        textHover: "#672013",
      },
    },
  },
  plugins: [],
}
export default config
