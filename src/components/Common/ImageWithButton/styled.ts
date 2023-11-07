import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledImageWithLabelCard = styled(Box)(() => ({
  minHeight: 280,
  '& .__image_wrapper': {
    minHeight: 280,
    width: '100%',
    position: 'relative',
  },
}));
