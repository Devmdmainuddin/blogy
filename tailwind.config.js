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
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

