import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h1: 'h2',
    //       h2: 'h2',
    //       h3: 'h2',
    //       h4: 'h2',
    //       h5: 'h2',
    //       h6: 'h2',
    //       subtitle1: 'h2',
    //       subtitle2: 'h2',
    //       body1: 'span',
    //       body2: 'span',
    //     },
    //   },
    // },
  },
});

export default theme;
