import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';

export const StyledRightDetails = styled(Box)(() => ({
  '& .MuiInputBase-input': {
    fontSize: '16px', // Set your desired font size
    padding: '12px 10px',
    maxHeight: '1.4375em'
  },
  '& .MuiInputLabel-root': {
    fontSize: '16px', // Set your desired label font size
  },
  '.MuiButtonBase-root': {
    fontSize: '16px', // Set your desired label font size
  },
}));
