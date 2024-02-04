import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'color1':'#3A3A3A',
        'color2':'#858585',
        'color3':'#797979',
        'color4':'#000000',
        'color5':'#111111',
        'color6':'#D3D3D3',
        'color7':'#7E7E7E',
        'color8':'#8FFFFF',
        'color9':'#FFFFFF',
        'color10':'#5A5A5A',
      }
    },
  },
  plugins: [],
};
export default config;
