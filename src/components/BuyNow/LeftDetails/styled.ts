import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';

export const StyledLeftDetails = styled(Box)(() => ({
  '& .MuiTypography-body1': {
    fontSize: '16px', // Set your desired font size
  },
  '& .MuiCheckbox-root': {
    paddingLeft: '0px',
  },

  '& .MuiInputBase-input': {
    fontSize: '16px', // Set your desired font size
    padding: '12px 10px',
    maxHeight: '1.4375em',
  },
  '& .MuiInputLabel-root': {
    fontSize: '16px', // Set your desired label font size
  },
  '.MuiButtonBase-root': {
    fontSize: '16px', // Set your desired label font size
  },
  // '.MuiDivider-root': {
  //   // Theme Color, or use css color in quote
  //   borderBottom: '2px solid black',
  //   margin: '15px 0px'
  // },
}));
