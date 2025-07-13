/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        secondary: '#64748b',
      },
      spacing: {
        'section': '2rem',
        'container': '1rem',
      },
      borderRadius: {
        'container': '0.75rem',
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'holographic-rotate': 'holographic-rotate 3s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
        'holographic-rotate': {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            filter: 'hue-rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
