import React from 'react';
import { Typography } from '@mui/material';
import { getCurrentYear } from '@wyn/utils/utils';
import styles from '../../styles/layout.module.css';

//interface Props {}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Typography variant="caption">
        @{getCurrentYear()} Bodyblend Wellness Pvt Ltd
      </Typography>
    </div>
  );
}
