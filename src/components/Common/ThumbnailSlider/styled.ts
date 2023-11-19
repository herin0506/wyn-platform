import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledSwiperNavigation = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  top: '50%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
