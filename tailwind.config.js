/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sirih: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
          deep: '#1B4332',
          forest: '#2D6A4F',
          leaf: '#40916C',
        },
        mint: {
          50: '#F2FBF9',
          100: '#E6F7F3',
          200: '#C2EFE4',
          300: '#8EE3CF',
          400: '#4FD0B4',
          500: '#26B99A',
          600: '#1D977E',
          700: '#1B7865',
          800: '#1A5F52',
          900: '#194F45',
        },
        wa: {
          green: '#25D366',
          dark: '#128C7E',
          deep: '#075E54',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(45, 106, 79, 0.15)',
        'glow': '0 0 25px rgba(38, 185, 154, 0.35)',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'pulse-wa': 'pulseSubtle 2.5s infinite ease-in-out',
        'float-slow': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
