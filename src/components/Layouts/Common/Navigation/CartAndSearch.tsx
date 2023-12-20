'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Hidden from '@mui/material/Hidden';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@wyn/utils/routes';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const NavigationCartAndSearchComponent = () => {
  const router = useRouter();
  const {cartItems} = useSelector((state: any) => state?.cartSlice);
  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
      width="100%"
      justifyContent="end"
    >
      <Hidden only={['xs', 'sm']}>
        <Grid item>
          <Link className="__link" href={APP_ROUTES.SIGN_UP}>
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
        <Badge badgeContent={cartItems?.length} color="primary">
          <IconButton onClick={() => handleNavigation(APP_ROUTES.CART)}>
            <Image
              src="/icons/cartIcon.svg"
              width={25}
              height={24}
              alt="cart_icon"
            />
          </IconButton>
        </Badge>
      </Grid>
    </Grid>
  );
};

export default NavigationCartAndSearchComponent;
