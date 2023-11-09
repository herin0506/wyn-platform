import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { APP_COLORS } from '@wyn/styles/colors/colors';
export const StyledHomeDiscoverCategories = styled(Box)(() => ({
  minHeight: 472,
  backgroundColor: APP_COLORS.ALICEBLUE,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiTypography-h1': {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
}));
