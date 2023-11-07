import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';

export const StyledProductCard = styled(Box)(() => ({
  width: '100%',
  minHeight: 300,
  '& .__image__wrapper': {
    minHeight: 250,
    width: '100%',
    position: 'relative',
  },
  '& .MuiTypography-body2': {
    fontFamily: fontFamilies.dmSans,
  },
  '& .MuiTypography-caption': {
    fontSize: 15,
    fontFamily: fontFamilies.dmSans,
    lineHeight: '15px',
  },
  '& .MuiButton-sizeSmall': {
    fontSize: 14,
    fontFamily: fontFamilies.dmSans,
    borderRadius:100
  },
}));
