import { createPreset } from 'fumadocs-ui/tailwind-plugin';
const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        accent:
          "hsl(var(--hue-accent),var(--saturation-accent),var(--lightness-accent))",
        "accent-hover":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) - 10%))",
        "accent-active":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) - 20%))",
        "accent-disabled":
          "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 30%))",
      }
    },
  },
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
};
