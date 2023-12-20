import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import {
  addItemQuantity,
  removeItemQuantity,
  removeCartItem,
} from '../../../../redux/reducers/cartSlice';

const StyledProductTitle = styled(Typography)(() => ({
  fontWeight: 700,
  marginBottom: 10,
}));

const StyledProductPrice = styled(Typography)(() => ({
  fontWeight: 500,
  marginBottom: 10,
}));

const StyledProductSize = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  color: theme.palette.grey[700],
}));

const StyledCartActions = styled(Box)(({ theme }) => ({
  minHeight: 70,
  width: '100%',
  border: `1px solid ${theme.palette.grey[800]}`,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 10,
}));

interface CartListItemComponentProps {
  cartItem: any;
}

const CartListItemComponent = ({ cartItem }: CartListItemComponentProps) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Grid item container md={8} alignItems="center" spacing={5}>
        <Grid item>
          <img width={200} alt="img" src={cartItem?.imgUrl} />
        </Grid>
        <Grid item xs>
          <StyledProductTitle variant="body2">
            {cartItem?.title}
          </StyledProductTitle>
          <StyledProductPrice variant="body2">
            ₹{cartItem?.price}
          </StyledProductPrice>
          <StyledProductSize variant="body2">
            Size: 1 month care pack 120 mints
          </StyledProductSize>
        </Grid>
      </Grid>
      <Grid item container md={2} alignItems="center" spacing={4}>
        <Grid item xs>
          <StyledCartActions>
            <IconButton
              onClick={() => {
                dispatch(
                  addItemQuantity({
                    _id: cartItem?._id,
                    qty: Number(cartItem?.qty) + 1,
                  }),
                );
              }}
            >
              <AddIcon />
            </IconButton>
            <Box flexGrow={1}>
              <Typography variant="body2" textAlign="center">
                {cartItem?.qty}
              </Typography>
            </Box>
            <IconButton
              onClick={() => {
                if (cartItem?.qty !== 1) {
                  dispatch(
                    removeItemQuantity({
                      _id: cartItem?._id,
                      qty: Number(cartItem?.qty) - 1,
                    }),
                  );
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
          </StyledCartActions>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              dispatch(
                removeCartItem({
                  _id: cartItem?._id,
                }),
              );
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <Typography variant="body2" textAlign="right">
          ₹{cartItem?.price * cartItem?.qty}
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default CartListItemComponent;
