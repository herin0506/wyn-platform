import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledDefualtLayoutFooter = styled(Box)(() => ({}));
export const StyledFooterNavList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiListSubheader-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[700],
    fontSize: 30,
    lineHeight: '48.239px',
    letterSpacing: -0.6,
  },
  '& .MuiListItemButton-root': {
    color: theme.palette.common.white,

    '& .MuiListItemText-root': {
      fontSize: 30,
    },
  },
}));
