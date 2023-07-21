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
      colors: {
        'primary': {
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
      fontSize: {
        'display': ['64px', {
          fontFamily: 'Markazi Text',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        }],
        'card-title': ['18px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
          textTransform: 'capitalize',
        }],
        'lead-text': ['18px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        }],
        'paragraph-text': ['18px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        }],
        'highlight-text': ['16px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        }],
        'sub-title': ['40px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        }],
        'section-title': ['20px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: 'normal',
        }],
        'section-categories': ['16px', {
          fontFamily: 'Karla',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: 'normal',
        }],

      },
    },
  },
  plugins: [],
}