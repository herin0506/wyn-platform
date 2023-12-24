import { Grid, Hidden, Rating, Typography, Button, Box, IconButton } from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import { useState } from 'react';

interface AkCartItemProps {
  productId: number,
  title: string,
  price: number,
  rating: number,
  imgUrl: string,
  brand:string,
}

const AkCartItem = ({
  productId,
  title,
  price,
  rating,
  imgUrl,
  brand,
} : AkCartItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice= Number(price) * Number(quantity);

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <Grid container mb={2}>
      <Grid item xs={3} sm={3} md={2} lg={2} xl={2} >
        <img src={imgUrl} alt="product" style={{ maxWidth: '100%', minHeight:'100%' }} />
      </Grid>
      <Grid item xs={7} sm={7} md={5} lg={5} xl={5} >
        <Grid item pt={2} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hidden smDown>
            <Typography variant='h5'  >{title}</Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='subtitle1'  >{title}</Typography>
          </Hidden>
        </Grid>
        <Grid container alignItems={'center'}>
          <Grid item xs={5} sm={5} md={3} lg={3} xl={3}>
            <Typography variant='subtitle2' align='left' >{brand}</Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Typography variant='body2' align='center'>|</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
            <Rating readOnly size='small' name='product-rating' value={rating} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='subtitle1' align='left' > ₹ {price.toFixed(2)}</Typography>
        </Grid>
        <Grid container mt={1}>
          <Grid item xs={8} sm={6}>
            <Box border={1} >
              <Grid container>
                <Grid item  justifyContent="center" xs={4} sm={4}>
                  <Button size='small' onClick={() => handleQuantityChange(-1)} fullWidth><Remove /></Button>
                </Grid>
                <Grid item xs={4} sm={4} >
                  <Typography variant='body1' textAlign={"center"}>{quantity}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Button size='small' fullWidth onClick={() => handleQuantityChange(1)}><Add /></Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} sm={2}>
            <IconButton size='large'>
                  <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={2} sm={2}>
                <Grid item pt={2} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography textAlign={"center"} variant="subtitle1">₹: {totalPrice.toFixed(2)}</Typography>
                </Grid>
            </Grid>
    </Grid>
  )
};

export default AkCartItem;
