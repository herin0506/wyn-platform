import { Card, CardContent } from '@mui/material';
import React from 'react';
import logo from '../../../assest/logo.png';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    boxShadow: 'none !important',
  },
}));

interface Props {}

function Navbar(props: Props) {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.navbar }}>
      <CardContent>
        <Image src={logo} />
      </CardContent>
    </Card>
  );
}

export default Navbar;
