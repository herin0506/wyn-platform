import { Card, CardContent } from '@mui/material';
import React from 'react';
import logo from '../../../assest/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Card>
      <CardContent>
        <Image alt="logo" src={logo} />
      </CardContent>
    </Card>
  );
}
