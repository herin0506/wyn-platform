import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledQuestionAnswer = styled(Box)(() => ({
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
