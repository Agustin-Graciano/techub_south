module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fuchsia' : {
          400:  '#ff84ff',
        },
        'rose' : {
          500:  '#fd2946',
          600:  '#bd1e21',
        },
        'slate' : {
          50:  '#fafafa',
          100:  '#ededed',
          200:  '#d0d0d0',
          300:  '#e9e9e9',
          400:  '#a6a6a6',
          500:  '#3b3b3b',
          600:  '#8e8e8e',
        },
        'blue'  : {
          100: '#99bfff',
          200: '#03123a',
          500: '#1062fe',
          600: '#005eff',
          700: '#024e98',
          800: '#3862ac',
          900: '#356fb6',
        },
        'gray'  : {
          50: '#afafaf',
          100: '#9da0a2',
          150: '#969595',
          200: '#9a9a99',
          300: '#706f6f',
          400: '#888887',
          500: '#575756',
          600: '#565d66',
          700: '#d3d3d3',
          800: '#878787',
          900: '#6a6a6a',
        },
        'neutral'  : {
          200: '#f3f3f3',
          300: '#333333',
          400: '#221f20',
          500: '#080909',
          600: '#313234',
          700: '#1d1d1b',
          900: '#040507',
          900: '#020305',
        },
        'amber'  : {
          500: '#FAB539',
          600: '#F8A811',
        },
      },
      fontFamily: {
        'sans': ['"Manrope"', 'sans-serif'],
      },
      width: {
        '21': '1.3125rem',
      },
      height: {
        '21': '1.3125rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1230px',
          },
          '@screen 2xl': {
            maxWidth: '1472px',
          }
        }
      })
    },
  ],
}