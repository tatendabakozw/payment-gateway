const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6d7f8a',
          superlight: '#acb6bc',
          dark: '#21323e',
          superdark: '#131d23',
          original: '#2f4858'
        },
        secondary: {
          light: '#ad596d',
          superlight: '#bf7e8e',
          dark: '',
          superdark: '',
          original: ''
        }
      },
    },
  },
  plugins: [],
};