/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional: extend gradient colors for later use
        'primary': '#FF6B6B',
        'secondary': '#6C5CE7',
        'accent': '#FDCB6E',
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(0, 0, 0, 0.1)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        fadeIn: 'fadeIn 0.3s ease-in',
      },
    },
  },
  plugins: [],
}

