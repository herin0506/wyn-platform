import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Add, Remove } from '@mui/icons-material';

interface CartItemProps {
    productId: number;
    title: string;
    price: number;
    rating: number;
    imgUrl: string;
    brand: string;
    onRemove?: (productId: number) => void;
};
const CartItem = ({
        productId,
        title,
        price,
        rating,
        imgUrl,
        brand,
        onRemove,
    }: CartItemProps) => {
        const [quantity, setQuantity] = useState(1);
        const totalPrice= Number(price) * Number(quantity);

        const handleQuantityChange = (change: number) => {
            setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
        };

    return (
        <Box key={productId} border={1} borderRadius={5} p={2} mb={1} mt={1} maxWidth={'450px'} sx={{ minHeight:'700px'}}>          
            <Grid item >
                <Box minHeight={'392px'}>
                    <img src={imgUrl} alt="product" style={{ maxWidth: '100%', minHeight:'392px' }} />
                </Box>
            </Grid>            
            <Typography variant="h4" style={{borderBottom:"1px solid black"}}>{title}</Typography>
            <Grid container >                
                <Grid  item xs={5} sm={4}>
                    <Typography variant='subtitle1' align='center' >{brand}</Typography>
                </Grid>
                <Grid item  xs={1}>
                    <Typography variant='subtitle1' align='center'>|</Typography>
                </Grid>
                <Grid item xs={5} >
                    <Rating  readOnly name='product-rating' value={rating} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item  justifyContent="center" xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button size='small' onClick={() => handleQuantityChange(-1)} fullWidth><Remove /></Button>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Typography variant='body1' textAlign={"center"}>{quantity}</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button size='small' fullWidth onClick={() => handleQuantityChange(1)}><Add /></Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography textAlign={"center"} variant="h5">Rs: {totalPrice.toFixed(2)}</Typography>
                </Grid>
            </Grid>
            <Grid container mt={1} spacing={1}>
                <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                    <Button  variant="contained" size='small' fullWidth onClick={() => onRemove && onRemove(productId)} >Remove From Cart</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                    <Button variant="contained" size='small' fullWidth>Buy Now</Button>
                </Grid>
            </Grid>
        </Box>
    )
};

export default CartItem;
