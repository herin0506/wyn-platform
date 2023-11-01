import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    [theme.breakpoints.up('md')]: {
      width: theme.breakpoints.values.lg,
      minHeight: 570,
      position: 'relative',
      '& ._main_wrapper_box': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        padding: `30px 30px 50px 30px`,
        "& .MuiTypography-h4":{
          fontWeight:300,
          "& span":{
            fontWeight:600,
          }
        },
        '& ._header_box': {
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        },
        '& ._form_box': {
          flexGrow: 1,
        },
      },
      '& .MuiCard-root': {
        width: '95%',
        minHeight: 500,
      },
    },
  },
}));
