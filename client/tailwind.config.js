/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
];

export const fontFamily = {
  sans: ["Inter", "sans-serif"],
};

export const theme = {
  extend: {
    colors: {
      primary: '#3066be',
    },
  },
};

export const plugins = [];