import List from '@mui/material/List';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { fontFamilies } from '@wyn/styles/fonts/fonts';

export const StyledDefualtLayoutFooter = styled(Box)(() => ({}));
export const StyledFooterNavList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiListSubheader-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[700],
    fontSize: 30,
    lineHeight: '48.239px',
    letterSpacing: -0.6,
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
      lineHeight: '25.239px',
    },
  },
  '& .MuiListItemButton-root': {
    color: theme.palette.common.white,
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
    },

    '& .MuiListItemText-root': {
      fontSize: 30,

      [theme.breakpoints.only('xs')]: {
        margin: 0,
      },

      '& span': {
        [theme.breakpoints.only('xs')]: {
          fontSize: 14,
        },
      },
    },
  },
}));

export const StyledInputField = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  '& .MuiInputBase-input': {
    paddingLeft: 10,
    height: 35,
    fontSize: 16,
    minWidth: 300,
    color: theme.palette.common.white,
    [theme.breakpoints.only('xs')]: {
      minWidth: 255,
    },
    '&::placeholder': {
      color: theme.palette.grey[100],
      fontSize: 16,
      fontStyle: 'italic',
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  height: 47,
  backgroundColor: theme.palette.grey[200],
  borderRadius: 0,
  color: theme.palette.primary.main,
  fontFamily: fontFamilies.workSans,
  fontWeight: 400,
}));
