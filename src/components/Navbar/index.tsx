import { Card, CardContent } from '@mui/material';
import React from 'react';
import logo from '../../../assest/logo.png';
import Image from 'next/image';
import styles from '../../styles/layout.css';

interface Props {};

export default function Navbar(props: Props) {
  return (
    <Card classes={styles.navbar}>
      <CardContent>
        <Image src={logo} />
      </CardContent>
    </Card>
  );
};
