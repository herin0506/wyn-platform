import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';

export const StyledHomeScience = styled(Box)(({ theme }) => ({
  backgroundColor: APP_COLORS.PAPAYA_WHIP,
  paddingLeft: 20,
  paddingRight: 20,
  [theme.breakpoints.only('xs')]: {
    backgroundColor: theme.palette.common.white,
  },
  '& .__image_wrapper': {
    width: '100%',
    height: 400,
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      height: 250,
      marginBottom: 30,
    },
    '& img': {
      objectFit: 'cover',
    },
  },
  '& .MuiTypography-body1': {
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
    },
  },
}));
