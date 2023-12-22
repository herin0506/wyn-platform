import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';

export const StyledAccordionList = styled(Box)(() => ({
  '& .Mui-expanded': {
    margin: '0px 0px !important',
  },
  label: {
    display: 'flex',
    alignItems: 'center'
  }
}));
