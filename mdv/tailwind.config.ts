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
        primaryGreen: '#8CC63F', // Green
        primaryBlue: '#00AEEF', // Blue
        primaryGray: '#6D6E71', // Gray 
        secondaryBlue: '#0A122A',// oxford blue
        secondaryGreen: '#475841', //feldgrau
        tertiaryGreen: '#507255', //hookers green
        primaryGreen2: '#628D2A', //4 shades darkrerer than primary
        primaryBlue2:'#0078A2', //4 shades darkerr than prrimary
        secondaryBlack:"#161925", //raisin black
        silver: "#c5baaf", //silver
        secondaryWhite:"FFFCF7" //baby powder
                 
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
