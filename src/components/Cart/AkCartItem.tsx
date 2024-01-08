import { Grid, Hidden, Rating, Typography, Button, Box, IconButton } from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '@wyn/app/Redux/reducer/CartSlice';

interface AkCartItemProps {
  cartItem: any;
};

const AkCartItem = ({cartItem} : AkCartItemProps) => {
  const dispatch = useDispatch();
  
  return (
    <Grid container key={cartItem.id} mb={2}>
      {/** Product image */}
      <Grid item xs={3} sm={3} md={2} lg={2} xl={2} >
        <img src={cartItem.imgUrl} alt="product" style={{ maxWidth: '100%', minHeight:'100%' }} />
      </Grid>

      {/** Product details */}
      <Grid item xs={7} sm={7} md={5} lg={5} xl={5} >
        <Grid item pt={2} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hidden smDown>
            <Typography variant='h5'  >{cartItem.title}</Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='subtitle1'  >{cartItem.title}</Typography>
          </Hidden>
        </Grid>
        <Grid container alignItems={'center'}>
          <Grid item xs={5} sm={5} md={3} lg={3} xl={3}>
            <Typography variant='subtitle2' align='left' >{cartItem.brand}</Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Typography variant='body2' align='center'>|</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
            <Rating readOnly size='small' name='product-rating' value={cartItem.rating} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='subtitle1' align='left' > ₹ {cartItem.price}</Typography>
        </Grid>
        <Hidden mdUp>
          <Grid container mt={1}>
            <Grid item xs={9} sm={6}>
              <Box border={1} borderColor={"gray"} >
                <Grid container>
                  <Grid item  justifyContent="center" xs={4} sm={4}>
                    <Button size='small' onClick={() => {
                      dispatch(decreaseQuantity({
                        id:cartItem.id,
                        quantity:cartItem.quantity -1,
                      }));
                    }} fullWidth><Remove /></Button>
                  </Grid>
                  <Grid item xs={4} sm={4} >
                    <Typography variant='body1' textAlign={"center"}>{cartItem.quantity}</Typography>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <Button size='small' fullWidth onClick={() => {
                      dispatch(increaseQuantity({
                        id:cartItem.id,
                        quantity:cartItem.quantity +1,
                      }));
                      console.log(cartItem.quantity);
                    }}><Add /></Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={3} sm={2}>
              <IconButton size='small' onClick={() => {
                dispatch(removeFromCart({
                  id:cartItem.id,
                }));
              }}>
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
                  <Button size='small' onClick={() => {
                    dispatch(decreaseQuantity({
                      id:cartItem.id,
                      quantity:cartItem.quantity -1,
                    }));
                  }} fullWidth><Remove /></Button>
                </Grid>
                <Grid item xs={4} sm={4} >
                  <Typography variant='body1' textAlign={"center"}>{cartItem.quantity}</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Button size='small' fullWidth onClick={() => {
                    dispatch(increaseQuantity({
                      id:cartItem.id,
                      quantity:cartItem.quantity +1,
                    }));
                    console.log(cartItem.quantity);
                  }}><Add /></Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <IconButton size='small' onClick={() => {
              dispatch(removeFromCart({
                id:cartItem.id,
              }));
            }}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      {/** Total price */}
      <Grid item mt={2} textAlign={"center"} alignItems={'center'} xs={2} sm={2} md={1} lg={2} xl={2}>
        <Typography variant="subtitle1">₹: {(cartItem.price) * (cartItem.quantity)}</Typography>
      </Grid>
    </Grid>
  )
};

export default AkCartItem;
