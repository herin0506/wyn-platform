import React, { Fragment } from 'react';
import { StyledProductCard } from './styled';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../../redux/reducers/cartSlice';

interface ProductCardComponentProps {
  product: any;
}

const StyledProductTitle = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ProductCardComponent = ({ product }: ProductCardComponentProps) => {
  const dispatch = useDispatch();
  return (
    <StyledProductCard>
      <Box component="div" className="__image__wrapper">
        <Image alt={product.title} src={product.imgUrl} fill />
      </Box>
      <StyledProductTitle href="#">
        <Typography variant="body2">{product.title}</Typography>
      </StyledProductTitle>

      <Grid container alignItems="center">
        {product.brand && (
          <Fragment>
            <Grid pb={1} item xs={6}>
              <Typography variant="caption">{product.brand}</Typography>
            </Grid>
            <Grid item pb={1} xs={1}>
              <Typography variant="caption">|</Typography>
            </Grid>
          </Fragment>
        )}

        {product.rating !== 0 && (
          <Grid item xs={4}>
            <Rating
              size="small"
              readOnly
              name="product-rating"
              value={product.rating}
            />
          </Grid>
        )}
      </Grid>
      <Box>
        <Typography variant="body2">Rs. {product.price}</Typography>
      </Box>
      <Grid mt={2} container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Button
            sx={{ marginBottom: '10px' }}
            variant="contained"
            size="small"
            onClick={() => {
              dispatch(
                addCartItem({
                  ...product,
                  qty: 1,
                }),
              );
            }}
          >
            ADD TO CART
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="small">
            BUY NOW
          </Button>
        </Grid>
      </Grid>
    </StyledProductCard>
  );
};

export default ProductCardComponent;
