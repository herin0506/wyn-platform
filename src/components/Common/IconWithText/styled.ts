import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledIconWithTextCardWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  '& .__icon_box': {
    position: 'relative',
    height: 50,
    width: 50,
    marginBottom: 20,
    [theme.breakpoints.only('xs')]: {
      height: 30,
      width: 30,
      marginBottom: 0,
      marginRight: 15,
    },
  },
  '& .MuiGrid-container': {
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'row',
    },
    '& .MuiTypography-body2': {
      [theme.breakpoints.only('xs')]: {
        textAlign: 'left',
        fontSize: 16,
      },
    },
  },
}));
