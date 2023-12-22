import Container from '@mui/material/Container';
import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CartListComponent from '@wyn/components/Cart/CartList/CartList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 200,
  paddingBottom: 200,
  '& .MuiTypography-h1': {
    fontWeight: 500,
  },
  '& .MuiButton-text': {
    textTransform: 'none',
    fontSize: 20,
    textDecoration: 'underline',
    letterSpacing: 1,
  },
}));

const CartPage = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push('/home');
  };

  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <Box mb={4}>
        <Grid container>
          <Grid item xs>
            <Typography variant="h1">Your cart</Typography>
          </Grid>
          <Grid item>
            <Button variant="text" onClick={handleContinueShopping}>Continue Shopping</Button>
          </Grid>
        </Grid>
      </Box>
      <CartListComponent />
    </StyledCollectionPageContainer>
  );
};

export default CartPage;
