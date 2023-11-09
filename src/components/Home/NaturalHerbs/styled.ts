import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledHomeNaturalHerbs = styled(Box)(({ theme }) => ({
  paddingBottom: 100,
  paddingTop: 75,
  [theme.breakpoints.only('xs')]: {
    paddingBottom: 30,
  },
  '& .__image_wrapper': {
    height: 167,
    width: 167,
    position: 'relative',
  },
  '& .MuiTypography-h1': {
    marginBottom: 55,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 30,
    },
  },
}));
