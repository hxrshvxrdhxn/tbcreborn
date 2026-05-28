import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#1B3A8C",
          mid: "#2952CC",
          light: "#EEF2FF",
        },
        gold: {
          DEFAULT: "#C8960C",
          bright: "#E5AD0E",
          light: "#FFF8E1",
        },
        tbc: {
          emerald: {
            DEFAULT: "#1A5C3A",
            mid: "#247A4E",
            light: "#E8F5EE",
          },
        },
        ink: "#0D1B2A",
        ivory: "#FAFAF8",
        "mid-grey": "#6B7280",
        "light-grey": "#F3F4F6",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Source Sans Pro", "Arial", "sans-serif"],
        display: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display": ["60px", { lineHeight: "1.05", letterSpacing: "-1.2px" }],
        "h1": ["48px", { lineHeight: "1.15", letterSpacing: "-0.5px" }],
        "h2": ["32px", { lineHeight: "1.2" }],
        "h3": ["24px", { lineHeight: "1.3" }],
        "body-lg": ["19px", { lineHeight: "1.65" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "caption": ["13px", { lineHeight: "1.5" }],
        "btn": ["15px", { letterSpacing: "0.3px" }],
        "label": ["12px", { letterSpacing: "2px" }],
      },
      maxWidth: {
        container: "1280px",
        "container-wide": "1440px",
        text: "760px",
      },
      spacing: {
        "s1": "4px",
        "s2": "8px",
        "s3": "16px",
        "s4": "24px",
        "s5": "40px",
        "s6": "64px",
        "s7": "96px",
        "s8": "128px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(13,27,42,0.04), 0 4px 14px rgba(13,27,42,0.04)",
        "card-hover": "0 1px 0 rgba(13,27,42,0.04), 0 12px 28px rgba(13,27,42,0.10)",
      },
      transitionTimingFunction: {
        tbc: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
