/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10',
        foreground: '#FAFAFA',
        primary: {
          DEFAULT: '#00C2FF',
          hover: '#00A8E6',
        },
        secondary: {
          DEFAULT: '#6A5CFF',
          hover: '#5A4CDD',
        },
        accent: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
