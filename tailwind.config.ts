/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";
 
// import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      screens: {
        "xl": "1400px",
      },
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1441px',
      '2xl':'1536px',
    },
    extend: {
      fontFamily:{
        code:"Source Code Pro",
      },
      colors: {
        black:{
          DEFAULT:'#000',
        },
        secondary:"#FF4D00"
      },
      keyframes: {
        breathe: {
          '0%': { borderColor: 'transparent', boxShadow: '0 0 10px rgba(0, 0, 255, 0)' },
          '75%': { borderColor: '#FF4D00', boxShadow: '0 0 20px #FF4D00' },
          '100%': { borderColor: 'transparent', boxShadow: '0 0 10px rgba(0, 0, 255, 0)' },
        },
      },
      animation: {
        breathe: 'breathe 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],

  
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}