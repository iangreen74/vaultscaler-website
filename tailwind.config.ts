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
        accent: '#39C5E4',
        'accent-hover': '#32ACC7',
        'stone-cream': {
          1: '#F6EEE7',
          2: '#ECE5DE',
          3: '#CAC4BE',
          4: '#A8A39E',
          5: '#86827E',
          6: '#4F4D4A',
        },
        'vs-blue': {
          1: '#39C5E4',
          2: '#32ACC7',
          3: '#2A92AA',
          4: '#23798D',
          5: '#1C606F',
          6: '#123D47',
          7: '#0D2E35',
        },
      },
    },
  },
  plugins: [],
};
export default config;
