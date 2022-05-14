/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E5',
        },
        bgColor: '#09090A',
        'surface-secondary': '#27272A',
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};
