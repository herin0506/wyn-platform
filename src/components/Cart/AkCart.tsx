import { Divider, Grid, Hidden, Typography } from '@mui/material';
import React from 'react';
import Cart from './Cart';
import { CartItems } from '@wyn/utils/constants';
import AkCartItem from './AkCartItem';
import Link from 'next/link';

const AkCart = () => {
  return (
    <Grid container mt={12}>
        <Grid container  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={6} sm={6} md={8} lg={8} xl={8} >
                <Typography variant="h4" m={0} pb={1} >
                    Your Cart
                </Typography>
            </Grid>
            <Grid item alignItems={'center'} xs={6} sm={6} md={4} lg={4} xl={4} >
                <Typography variant="body2"  textAlign={"right"} m={0} pb={1} >
                   <Link href={'#'}>
                        continue shopping
                   </Link>
                </Typography>
            </Grid>
        </Grid>
        <Grid container  sx={{borderBottom:'1px solid black'}} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={10} sm={10} md={7} lg={7} xl={7} >
                <Typography variant="caption" textAlign={"center"} m={0} pb={1} >
                    PRODUCT
                </Typography>
            </Grid>
            <Hidden mdDown>
                <Grid item md={4} lg={3} xl={3} >
                    <Typography variant="caption" textAlign={"center"} m={0} pb={1} >
                        QUANTITY
                    </Typography>
                </Grid>
           </Hidden>
            <Grid item justifyContent={'center'} alignContent={'center'} xs={2} sm={2} md={1} lg={2} xl={2}>
                <Typography variant="caption" textAlign={"center"} m={0} pb={1} >
                    TOTAL
                </Typography>
            </Grid>
            
        </Grid>
        <Grid container  xs={12} sm={12} md={12} lg={12} xl={12}>
                {CartItems.map((product) => (     
                            <AkCartItem {...product } /> 
                    ))
                }
            </Grid>
    </Grid>
  )
};

export default AkCart;
