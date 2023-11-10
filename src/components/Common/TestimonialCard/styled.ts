import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
export const StyledTestimonialImageBox = styled(Box)(({ theme }) => ({
  width: 500,
  minHeight: 320,
  height: '100%',
  backgroundColor: 'gainsboro',
//   [theme.breakpoints.only('xs')]:{
//     width: "150px",
//     minHeight: 150,
//   }
}));
