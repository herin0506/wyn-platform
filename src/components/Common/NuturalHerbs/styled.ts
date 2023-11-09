import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyedSwiperWrapper = styled(Box)(() => ({
  position: 'relative',
}));

export const StyledSwiperNavigation = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  top: '50%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledImageWrapperBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& .__image_wrapper': {
    height: 167,
    width: 167,
    position: 'relative',
  },
  '& .__swipe_slider': {
    paddingLeft: 40,
    paddingRight: 40,
  },
}));
