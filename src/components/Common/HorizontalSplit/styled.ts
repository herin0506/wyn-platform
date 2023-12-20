import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import Box from '@mui/material/Box';

export const StyledHorizontalSplitComponent = styled(Box)(() => ({
  //backgroundColor: APP_COLORS.PAPAYA_WHIP,
  '& .__image_wrapper': {
    width: '100%',
    height: 500,
    position: 'relative',
  },
  '& .__image_wrapper_2': {
    position: 'relative',
  },
  '& .MuiButton-sizeSmall': {
    fontSize: 14,
    borderRadius: 100,
  },
}));
