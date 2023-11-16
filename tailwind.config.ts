import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-theme': '#1C2025',
        'light-theme': '#F2F2F2',
        'light-text-1': '#F2F2F2',
        'light-text-2': '#B3C3D7',
        'dark-text': '#27282F',
        'dark-button': '#10637D',
        'light-button': '#10F0FC'
      },
      maxWidth: {
        '10xl': '1440px'
      }
    },
  },
  plugins: [],
}
export default config
