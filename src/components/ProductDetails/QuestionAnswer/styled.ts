import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import Box from '@mui/material/Box';

export const StyledQuestionAnswerComponent = styled(Box)(() => ({
  //backgroundColor: APP_COLORS.PAPAYA_WHIP,
  '& .__image_wrapper': {
    width: "100%",
    height: 450,
    position: 'relative',
  },
  '& .MuiButton-sizeSmall': {
    fontSize: 14,
    borderRadius:100
  },
  backgroundImage: 'url("/images/asset43.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}));
