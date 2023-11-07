import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';
import { shouldForwardProp } from '@wyn/utils/utils';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

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
