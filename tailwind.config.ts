import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rmf-black': '#0a0a0a',
        'rmf-red': '#cc0000',
        'rmf-white': '#ffffff',
        'rmf-grey': '#f5f5f5',
        'rmf-muted': '#999999',
        'rmf-dark': '#111111',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.4em',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

export default config
