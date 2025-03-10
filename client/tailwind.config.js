/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        metropolis: ['Metropolis Regular', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': {
            base: '#193A6F',
            100: '#D1D8E2',
            200: '#B2BDCF',
            300: '#8C9CB7',
            400: '#667C9F',
            500: '#3F5B87',
            600: '#15305D',
            700: '#11274A',
            800: '#0D1D38',
            900: '#081325',
          },
        'medium-blue': {
            base: '#2C599D',
            100: '#D5DEEB',
            200: '#B9C8DE',
            300: '#95ACCE',
            400: '#7290BE',
            500: '#4F75AD',
            600: '#254A83',
            700: '#1D3B69',
            800: '#162D4F',
            900: '#0F1E34',
          },
        'light-blue': {
            base: '#4EAAE4',
            100: '#DCEEFA',
            200: '#C4E3F6',
            300: '#A6D4F1',
            400: '#89C6ED',
            500: '#6CB8E8',
            600: '#418EBE',
            700: '#347198',
            800: '#275572',
            900: '#1A394C',
          },
        'light-red': {
            base: '#E9A5BD',
            100: '#FBEDF2',
            200: '#F8E1E9',
            300: '#F4D2DE',
            400: '#F0C3D3',
            500: '#EDB4C8',
            600: '#C2899D',
            700: '#9B6E7E',
            800: '#75535F',
            900: '#4E373F',
          },
        'deep-red': {
            base: '#A81A4C',
            100: '#EED1DB',
            200: '#E2B3C3',
            300: '#D38CA5',
            400: '#C56688',
            500: '#B6406A',
            600: '#8C163F',
            700: '#701133',
            800: '#540D26',
            900: '#380919',
          },
          black: '#000000',
          info: '#2F80ED',
          success: '#1FFFA5',
          'success-100': '#D5FAEB',
          warning: '#E2B93B',
          'warning-100': '#FCF9ED',
          error: '#EB5757',
          'light-grey': '#F9F9F9',
          'dark-gray':'#030303',
          'dark-gray-medium':'#6B6B6B',
          'pinkish-purple': '#C3ACB6',
          'off-white': '#FAFBFB',
      },
      boxShadow: {
        'primary': '0px 2px 4px 0px #0510370F, 0px 0px 0px 1px #CDD0DC inset',
        'secondary': '0px 8px 16px 0px #00000029',
        'light-bluish-gray': '0px 0px 0px 1px #CDD1DC',
        'lavender-blue': '0px 0px 0px 4px #B4C5FF, 0px 0px 0px 1px #8C92AB inset',
        'lavender-blue-off-inset': '0px 0px 0px 0px #B4C5FF, 0px 0px 0px 0px #8C92AB inset,0px 2px 6px 0px #05103733',
        'bright-vibrant-red': '0px 0px 0px 1px #FB2047',
        'variant-1': '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
        'variant-2': '0px 16px 32px 0px rgba(0, 0, 0, 0.16)',
      },
      borderColor: {
        'base': '#193A6F',
        'light-bluish-gray': '#CDD1DC',
        'lavender-blue': ' #8C92AB',
        'bright-vibrant-red': '#FB2047',
        'pinkish-purple': '#C3ACB6',
      },
      fontSize:{
        '1xl': '22px',
        '3.5xl': '32px',
      },
      padding: {
        '0.5': '2px'
      },
      borderWidth:{
        1: '0.3px'
      }
    },
  },
  plugins: [],
}

