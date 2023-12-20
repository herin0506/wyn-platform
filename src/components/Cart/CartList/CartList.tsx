import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CartListItemComponent from './CartListItem';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Button from '@mui/material/Button';

const StyledCartListComponent = styled(Grid)(({ theme }) => ({
  '& .__divider': {
    height: 1,
    backgroundColor: theme.palette.divider,
  },
}));

const CartListComponent = () => {
  const { cartItems, cartTotal } = useSelector(
    (state: any) => state?.cartSlice,
  );

  console.log(cartTotal);

  return (
    <StyledCartListComponent container alignItems="center">
      {!_.isEmpty(cartItems) && (
        <Fragment>
          <Grid container item xs={12}>
            <Grid item md={8}>
              <Typography variant="body2">PRODUCT</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="body2">QUANTITY</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="body2" textAlign="right">
                TOTAL
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={4} component="div" className="__divider" />
          </Grid>
          {cartItems.map((cartItem: any) => (
            <CartListItemComponent key={cartItem?._id} cartItem={cartItem} />
          ))}

          <Grid item xs={12}>
            <Box mt={4} component="div" className="__divider" />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs>
              <Box mt={7}>
                <Typography mb={2} variant="body1">
                  Order special instructions
                </Typography>
                <textarea style={{ width: 400 }} rows={3} />
              </Box>
            </Grid>
            <Grid item>
              <Box mt={7}>
                <Typography mb={3} textAlign="right">
                  SubTotal : ₹{cartTotal}.00
                </Typography>
                <Typography  mb={3} textAlign="right" variant="body2">
                  Tax included and shipping calculated at checkout
                </Typography>
                <Button fullWidth={true} size="large" variant="contained">
                  Check Out
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </StyledCartListComponent>
  );
};

export default CartListComponent;
