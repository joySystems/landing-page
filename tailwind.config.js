/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    screens:{
      sm: '320px',
      md: '792px',
      lg: '1200px',
      xl: '1440px',
    },
    extend: {

      backgroundImage: {
        
        'footer-texture': "url('../src/img/gradient.jpg')",
      },
      colors: {
        lavander: {
          500: '#7E3AF2;',
          600: '#6C2BD9',
          800: '#E02424;',
        },
        black: {
          500: '#27272A;',
        },
        white: {
          500: '#FCFBFA;',
        },
        gray: {
          500: '#E5E7EB;',
          800: '#696969;',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },


    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
