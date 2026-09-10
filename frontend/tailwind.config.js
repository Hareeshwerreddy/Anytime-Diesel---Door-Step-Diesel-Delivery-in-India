/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        atd: {
          yellow: '#FCD30A',
          amber: '#F59E0B',
          red: '#EE3427',
          dark: '#04000B',
          darker: '#0B0F19',
          card: '#121826',
          border: '#1F2937',
          muted: '#8E9BAE'
        }
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
