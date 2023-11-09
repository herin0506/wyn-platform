import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledMainRootBox = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledMainTopNavigationSection = styled(Box);
export const StyledMainRenderedSection = styled(Box)(() => ({
  flexGrow: 1,
}));
export const StyledFooterSection = styled(Box)(({ theme }) => ({
  minHeight: 300,
  backgroundColor: theme.palette.primary.main,
  paddingTop: 61,
  paddingBottom: 61,
  '& .MuiTypography-h1': {
    color: theme.palette.common.white,
  },
}));
