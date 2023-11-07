import { createTheme } from '@mui/material/styles';
import { appFonts, fontFamilies } from './fonts/fonts';
import { APP_COLORS } from './colors/colors';
const defaultTheme = createTheme({});
const theme = createTheme({
  typography: {
    fontFamily: [...appFonts].join(','),
    h1: {
      fontSize: 50,
      lineHeight: 'normal',
      letterSpacing: -1,
      fontWeight: 300,
      fontFamily: fontFamilies.workSans,
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: 32,
      },
    },
    h3: {
      fontFamily: fontFamilies.kameron,
    },
    h4: {
      fontSize: 30,
      lineHeight: '45px',
    },
    body1: {
      fontSize: 25,
      lineHeight: '166.2%',
      fontFamily: fontFamilies.dmSans,
    },
    body2: {
      fontSize: 20,
    },
  },
  palette: {
    primary: {
      main: APP_COLORS.PRIMARY_COLOR,
    },
    secondary: {
      main: APP_COLORS.SECONDARY_COLOR,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides:{
        root:{
          backgroundColor:"transparent"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        containedSizeLarge: {
          minHeight: 52,
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilies.dmSans,
          fontWeight: 400,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilies.dmSans,
        },
      },
    },
  },
});

export default theme;
