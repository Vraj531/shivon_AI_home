import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#FC7754',
          'secondary': '#BDDBD1',
          'accent': '#FCFFEC',
          'neutral': '#f3f4f6',
          'base-100': '#ede9fe',
          'info': '#0000ff',
          'success': '#00ff00',
          'warning': '#00ff00',
          'error': '#ff0000',
        },
      },
    ],
  },
};
export default config;
