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
  onRemove?: (productId: number) => void;
}

const AkCartItem = ({
  onTotalPriceChange,
  onRemove,
  productId,
  title,
  price,
  rating,
  imgUrl,
  brand,
} : AkCartItemProps & { onTotalPriceChange : (price: number) => void}) => {

  const [quantity, setQuantity] = useState(1);
  const totalPrice= Number(price) * Number(quantity);

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    onTotalPriceChange(totalPrice);
  };

  return (
    <Grid container key={productId} mb={2}>
      {/** Product image */}
      <Grid item xs={3} sm={3} md={2} lg={2} xl={2} >
        <img src={imgUrl} alt="product" style={{ maxWidth: '100%', minHeight:'100%' }} />
      </Grid>

      {/** Product details */}
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
          <Typography variant='subtitle1' align='left' > ₹ {price}</Typography>
        </Grid>
        <Hidden mdUp>
          <Grid container mt={1}>
            <Grid item xs={9} sm={6}>
              <Box border={1} borderColor={"gray"} >
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
            <Grid item xs={3} sm={2}>
              <IconButton size='small' onClick={() => onRemove && onRemove(productId)}>
                    <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      {/** Quantity */}
      <Hidden mdDown>
        <Grid container  mt={2} md={4} lg={3} xl={3}>
          <Grid item md={8} lg={8} xl={8}>
            <Box ml={2} mr={2} border={1} >
              <Grid container justifyContent="center" >
                <Grid item  xs={4} sm={4}>
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
          <Grid item md={4} lg={4} xl={4}>
            <IconButton size='small' onClick={() => onRemove && onRemove(productId)}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      {/** Total price */}
      <Grid item mt={2} textAlign={"center"} alignItems={'center'} xs={2} sm={2} md={1} lg={2} xl={2}>
        <Typography variant="subtitle1">₹: {totalPrice.toFixed(2)}</Typography>
      </Grid>
    </Grid>
  )
};

export default AkCartItem;
