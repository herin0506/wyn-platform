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

interface ProductCardComponentProps {
  title: string;
  price: string;
  rating: number;
  imgUrl: string;
  brand: string | null;
}

const StyledProductTitle = styled(Link)(({theme})=>({
  color:theme.palette.text.primary,
  textDecoration:"none",
  "&:hover":{
    textDecoration:"underline",
  }
}));

const ProductCardComponent = ({
  title,
  price,
  rating,
  imgUrl,
  brand,
}: ProductCardComponentProps) => {
  return (
    <StyledProductCard>
      <Box component="div" className="__image__wrapper">
        <Image alt={title} src={imgUrl} fill />
      </Box>
      <StyledProductTitle href="#">
        <Typography variant="body2">{title}</Typography>
      </StyledProductTitle>

      <Grid container alignItems="center">
        {brand && (
          <Fragment>
            <Grid pb={1} item xs={6}>
              <Typography variant="caption">{brand}</Typography>
            </Grid>
            <Grid item pb={1} xs={1}>
              <Typography variant="caption">|</Typography>
            </Grid>
          </Fragment>
        )}

        {rating !== 0 && (
          <Grid item xs={4}>
            <Rating
              size="small"
              readOnly
              name="product-rating"
              value={rating}
            />
          </Grid>
        )}
      </Grid>
      <Box>
        <Typography variant="body2">Rs. {price}</Typography>
      </Box>
      <Grid mt={2} container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Button sx={{marginBottom:"10px"}} variant="contained" size="small">
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
