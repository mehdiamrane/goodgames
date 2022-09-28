import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    50: '#ffefeb',
    100: '#FEDED6',
    200: '#FEB7AE',
    300: '#FE8786',
    400: '#FD6874',
    500: '#FD3659',
    600: '#D92757',
    700: '#B61B53',
    800: '#92114C',
    900: '#790A47',
  },
};

const theme = extendTheme({ colors });

export default theme;
