import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';

export const StyledHomeProductsSlider = styled(Box)(() => ({
  paddingTop: 85,
  paddingBottom: 85,
  position: 'relative',
  '& .MuiButtonBase-root': {
    fontFamily: fontFamilies.kameron,
    textTransform: 'none',
    fontSize: 22,
    lineHeight: 'normal',
    letterSpacing: '0.11px',
  },
}));


export const StyledSwiperNavigation = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  top: '50%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));