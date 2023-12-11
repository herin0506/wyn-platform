import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import Box from '@mui/material/Box';

export const StyledThumbnailDescriptionList = styled(Box)(() => ({
  //backgroundColor: APP_COLORS.PAPAYA_WHIP,
  Divider: {
      // Theme Color, or use css color in quote
      background: APP_COLORS.BLACK,
      borderBottom: '4px solid black',
  },
  '& .MuiButton-sizeSmall': {
    fontSize: 14,
    borderRadius:100
  },
}));
