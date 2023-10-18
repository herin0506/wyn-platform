import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

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
  footerText:{
  }
}));
interface Props {}

function Footer(props: Props) {
  const classes = useStyles()
  return <div className={classes.footer}>
    <Typography className={classes.footerText} variant='caption'>@2023 Bodyblend Wellness Pvt Ltd</Typography>
  </div>;
}

export default Footer;
