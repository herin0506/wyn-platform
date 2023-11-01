// import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

// import { red } from '@mui/material/colors';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: [poppins.style.fontFamily].join(','),
    h3: {
      fontSize: 40,
      lineHeight: '55px',
    },
    h4: {
      fontSize: 30,
      lineHeight: '45px',
    },
    body2: {
      fontSize: 13,
    },
  },
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
