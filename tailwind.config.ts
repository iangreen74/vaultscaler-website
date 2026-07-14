import type { Config } from "tailwindcss";

// Gallery-at-night. Near-black grounds, warm off-white type, one restrained alert-red
// used sparingly for emphasis/alarms only. Everything else is monochrome.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // grounds (darkest -> a touch lighter for raised surfaces)
        ink: {
          DEFAULT: "#0a0a0b",
          950: "#0a0a0b",
          900: "#0d0d0f",
          800: "#141416",
          700: "#1b1b1e",
          600: "#26262a",
        },
        // type
        bone: "#ece9e3", // primary text — warm off-white, like lit paper
        muted: "#9b9a93", // secondary
        dim: "#6b6a63", // tertiary / captions
        line: "#242427", // hairlines
        // the single accent — an alarm red, used once or twice per page at most
        alert: "#d43f31",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
