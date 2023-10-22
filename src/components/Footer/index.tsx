import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { getCurrentYear } from '@wyn/utils/utils';

const useStyles = makeStyles(() => ({
  footer: {
   background:'#000000',
   color:'#ffffff',
   height:'30px',
   textAlign:'center',
   position:'fixed',
   left:0,
   right:0,
   bottom:0
  },
}));

function Footer() {
  const classes = useStyles()
  return <div className={classes.footer}>
    <Typography  variant='caption'>@{getCurrentYear()} Bodyblend Wellness Pvt Ltd</Typography>
  </div>;
}

export default Footer;
