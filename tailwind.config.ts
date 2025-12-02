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
        accent: '#A8F1E0',
        'accent-hover': '#69C7B1',
        'vs-blue': {
          1: '#39C5E4',
          2: '#32ACC7',
          3: '#2A92AA',
          4: '#23798D',
          5: '#1C606F',
          6: '#123D47',
          7: '#0D2E35',
        },
        'vs-mint': {
          1: '#DCFFF7',
          2: '#A8F1E0',
          3: '#69C7B1',
          4: '#399C85',
          5: '#16725D',
          6: '#014637',
          7: '#223833',
        },
      },
    },
  },
  plugins: [],
};
export default config;
