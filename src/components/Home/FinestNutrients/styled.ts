import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledHomeFinestNutrients = styled(Box)(({ theme }) => ({
  paddingTop: 75,
  paddingBottom: 75,
  [theme.breakpoints.only('xs')]: {
    paddingTop: 40,
    paddingBottom: 30,
  },
  '& .MuiTypography-h1': {
    marginBottom: 55,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 30,
    },
  },
}));
