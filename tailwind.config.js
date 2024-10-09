/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bshadow': '0 0 20px rgba(0, 0, 0, .05)',
        'custom': '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
      animation: {
        leftToRight: 'leftToRight 3s infinite linear',
      },
      keyframes: {
        leftToRight: {
          '0%': { left: '0%' },
          '50%': { left: '50%' },
          '100%': { left: '0%' },
        },
    },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

