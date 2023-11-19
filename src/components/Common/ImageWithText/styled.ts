import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageWithText = styled(Box)(() => ({
  width: '100%',
  minHeight: 400,
  '& .__image_wrapper': {
    width: '100%',
    height: 350,
    overFlow: 'hidden',
    position: 'relative',
  },
}));
