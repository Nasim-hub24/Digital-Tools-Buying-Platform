/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed', // Primary Brand Violet
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 25px -5px rgba(124, 58, 237, 0.35)',
        'card-hover': '0 20px 30px -10px rgba(124, 58, 237, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'bounce-short': 'bounce 0.6s ease-in-out 1',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        digitools: {
          "primary": "#7c3aed",
          "primary-focus": "#6d28d9",
          "primary-content": "#ffffff",
          "secondary": "#a78bfa",
          "accent": "#f43f5e",
          "neutral": "#1e293b",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          "info": "#38bdf8",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "light"
    ],
  }
}
