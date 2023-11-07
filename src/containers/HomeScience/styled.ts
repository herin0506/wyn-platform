import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';

export const StyledHomeScience = styled(Container)(() => ({
  backgroundColor: APP_COLORS.PAPAYA_WHIP,
  '& .__image_wrapper': {
    width: "100%",
    height: 400,
    position: 'relative',
  },
}));
