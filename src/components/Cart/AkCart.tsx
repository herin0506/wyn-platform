import { Grid, Hidden, Typography,TextField, Button } from '@mui/material';
import AkCartItem from './AkCartItem';
import Link from 'next/link';
import { useSelector} from 'react-redux';

const AkCart = () => {
    const {cartItems, cartTotal}  = useSelector( 
        (state:any) => state?.cartSlice,
    );

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
        <Grid container   xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={10} sm={10} md={7} lg={7} xl={7} >
                <Typography variant="caption" textAlign={"center"} m={0} pb={1} >
                    PRODUCT
                </Typography>
            </Grid>
            <Hidden mdDown>
                <Grid item  md={4} lg={3} xl={3} >
                    <Typography variant="caption"  m={0} pl={2} pb={1} >
                        QUANTITY
                    </Typography>
                </Grid>
           </Hidden>
            <Grid item textAlign={'center'} xs={2} sm={2} md={1} lg={2} xl={2}>
                <Typography variant="caption" textAlign={"center"} m={0} pb={1} >
                    TOTAL
                </Typography>
            </Grid>
        </Grid>
        <Grid container borderTop={1} borderBottom={1}  borderColor={'divider'} xs={12} sm={12} md={12} lg={12} xl={12}>
            {cartItems.map((cartItem:any) => (     
                    <AkCartItem cartItem={cartItem}/> 
                ))
            }
        </Grid>
        <Grid container mt={2} mb={2} spacing={1}>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant='body2'>
                    Order Special Instructions
                </Typography>
            </Grid>
            <Grid item mt={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h6" textAlign={'center'} m={0} pb={1} >
                    Subtotal ₹ {cartTotal}.00
                </Typography>
                <Typography variant="subtitle1" textAlign={'center'} m={0} pb={1} >
                    Tax included and shipping calculated at checkout
                </Typography>
                <Button variant="contained" fullWidth>
                    Check Out
                </Button>
            </Grid>
        </Grid>
    </Grid>
  )};

export default AkCart;
