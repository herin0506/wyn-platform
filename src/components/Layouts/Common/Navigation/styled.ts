import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';
import { shouldForwardProp } from '@wyn/utils/utils';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import { Dialog } from '@mui/material';

export const StyledHeaderNavigation = styled(AppBar, {
  shouldForwardProp: (props) =>
    shouldForwardProp<{ shouldChangeNavBar: boolean }>(
      ['shouldChangeNavBar'],
      props,
    ),
})<{ shouldChangeNavBar: boolean }>(({ theme, ...props }) => ({
  backgroundColor: 'transparent',

  color: theme.palette.common.black,
  ...(props.shouldChangeNavBar && {
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),

  '& .search-input-wrapper': {
    minWidth: 250,
    position: 'relative',
    '& .search_input': {
      height: 39,
      borderRadius: 100,
      border: 'none',
      paddingLeft: 15,
      width: '100%',
      ...(props.shouldChangeNavBar && {
        border: `1px solid ${theme.palette.divider}`,
      }),
    },
    '& .__search_icon_wrapper': {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },

  '& .__logo_wrapper': {
    position: 'relative',
    height: 97,
    width: 80,
    [theme.breakpoints.only('xs')]: {
      height: 57,
      width: 70,
    },
    ...(props.shouldChangeNavBar && {
      backgroundColor: theme.palette.common.white,
      height: 77,
      width: 60,
      [theme.breakpoints.only('xs')]: {
        height: 57,
        width: 70,
      },
    }),
  },
  '& .__link': {
    fontWeight: 400,
    fontSize: 20,
    color: theme.palette.primary.main,
    textTransform: 'none',
    fontFamily: fontFamilies.dmSans,
    lineHeight: 'normal',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const StyledTabsList = styled(Tabs)(() => ({
  minWidth: '100%',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export const StyledTab = styled(Tab, {
  shouldForwardProp: (props) =>
    shouldForwardProp<{
      ref?: React.Ref<HTMLDivElement>;
    }>(['ref'], props),
})<{ ref?: React.Ref<HTMLDivElement> }>(({ theme }) => ({
  fontWeight: 400,
  fontSize: 20,
  color: theme.palette.primary.main,
  textTransform: 'none',
  fontFamily: fontFamilies.dmSans,
  lineHeight: 'normal',
  [theme.breakpoints.only('xs')]: {
    paddingLeft: 5,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 16,
    minWidth: 55,
  },
}));

export const SearchBarWrapper = styled(Box)(() => ({
  position: 'relative',
  '& .__search_input': {},
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

export const StyledMenuPaper = styled(Paper)(() => ({
  padding: 20,
}));

export const StyledMenuPopper = styled(Popper)(({ theme }) => ({
  minWidth: 300,
  zIndex: Number(theme.zIndex.appBar),
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: 0,
  display: 'block',
  whitespace: 'unset',
  wordbreak: 'break-all',
  borderBottom: `1px solid ${theme.palette.divider}`,
  height: 45,
  fontFamily: fontFamilies.dmSans,
  marginBottom: 10,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiTypography-root': {
    fontSize: 18,
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
      fontWeight: 600,
    },
  },
}));

export const StyledDialog = styled(Dialog)(() => ({
  position: 'relative',
  '& .MuiDialogContent-root': {
    position: 'relative',
    backgroundColor: "red",
  },
}));

export const StyledDialogCloseIcon = styled(Box)(() => ({
  position: 'absolute',
  top: 20,
  right: 20,
}))