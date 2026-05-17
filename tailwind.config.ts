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
        // Pop colors (Mint greens - 2 shades)
        'pop-light': '#00e3aeff',
        'pop-dark': '#00d9a6ff',
        'pop-backup': '#00e3aeff',
        
        // Primary colors (Brand blues - 4 shades, 1=lightest, 4=darkest)
        'primary-1': '#D3E3F0',
        'primary-2': '#95AFC5',
        'primary-3': '#234D70',
        'primary-4': '#122E46',

        // Secondary colors (Greys - 6 shades, 1=lightest, 6=darkest)
        'secondary-1': '#F9FAFB',
        'secondary-2': '#F3F4F6',
        'secondary-3': '#E5E7EB',
        'secondary-4': '#D1D5DB',
        'secondary-5': '#9CA3AF',
        'secondary-6': '#6B7280',
      },
    },
  },
  plugins: [],
};
export default config;
