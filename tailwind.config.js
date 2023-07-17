/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Karla', 'sans-serif'],
    },
    extend: {
      //adding custom colors
      color: {
        'primary' : {
          green: '#495E57',
          yellow: '#F4CE14',
        },
        'secondary': {
          orange: '#EE9972',
          light_orange: '#FBDABB'
        },
        'highlights': {
          grey: '#EDEFEE',
          black: '#333'
        }
      },
      fontFamily: {
        'markazi': ['Markazi Text', 'serif'],
      },
    },
  },
  plugins: [],
}