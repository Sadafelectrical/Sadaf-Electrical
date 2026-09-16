/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0a6fdb',
          'blue-dark': '#0857ad',
          'blue-soft': '#e8f1fc',
          navy: '#141d2b',
          'navy-2': '#1c2636',
          'navy-3': '#253145',
          ink: '#111827',
          text: '#4b5563',
          muted: '#8a94a6',
          line: '#e5e9f0',
          'bg-soft': '#f5f7fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      maxWidth: {
        container: '1360px',
      },
      boxShadow: {
        card: '0 6px 24px rgba(17,24,39,.08)',
        'card-hover': '0 14px 32px rgba(17,24,39,.14)',
      },
    },
  },
  plugins: [],
}
