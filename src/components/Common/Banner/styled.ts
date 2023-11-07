import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import theme from '@wyn/styles/theme';

export const StyledHomeBanner = styled(Box)(() => ({
  minHeight: 800,
  width: '100%',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    minHeight: 500,
  },
}));
