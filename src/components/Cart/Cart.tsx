import React, {useState} from 'react';
import { CartItems as InitialCartItems} from '@wyn/utils/constants';
import CartItem from './CartItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Cart = () => {
    const [CartItems, setCartItems] = useState(InitialCartItems);
    const handleRemoveItem =(productId: number) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.productId !== productId));
    };
    return (
        <Grid container>
            <Grid item mb={2} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="body1" mt={8} pt={2} pb={1} sx={{borderBottom:"1px solid black"}}>
                    My Cart
                </Typography>
            </Grid>
            <Grid container spacing={2} >
                {CartItems.map((product) => (
                        <Grid  item xs={12} sm={12} md={6} lg={4} xl={4} >         
                            <CartItem {...product } onRemove={handleRemoveItem} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
};

export default Cart;
