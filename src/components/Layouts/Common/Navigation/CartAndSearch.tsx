'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Hidden from '@mui/material/Hidden';

const NavigationCartAndSearchComponent = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
      width="100%"
      justifyContent="end"
    >
      <Hidden only={['xs', 'sm']}>
        <Grid item>
          <Link className="__link" href="/">
            Sign Up
          </Link>
        </Grid>
        <Grid item>
          <Box component="div" className="search-input-wrapper">
            <input className="search_input" />
            <Box component="div" className="__search_icon_wrapper">
              <IconButton>
                <Image
                  src="/icons/search.svg"
                  width={25}
                  height={24}
                  alt="search_icon"
                />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item>
          <IconButton>
            <Image
              src="/icons/search.svg"
              width={25}
              height={24}
              alt="search_icon"
            />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item>
        <IconButton>
          <Image
            src="/icons/cartIcon.svg"
            width={25}
            height={24}
            alt="cart_icon"
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NavigationCartAndSearchComponent;
