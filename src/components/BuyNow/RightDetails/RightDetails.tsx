import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { StyledRightDetails } from './styled';
import ProductComponent from '../Product/Product';
import { buyNowproductList } from '@wyn/utils/constants';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const RightDetailsComponent = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');

  const handleApply = () => {};
  const [discountCouponValue, setDiscountCouponValue] = useState('');

  const handleTextFieldChange = (event:any) => {
    setDiscountCouponValue(event.target.value);
  };
  let total = 0;
  const calculateSubTotal = () => {
    return buyNowproductList.reduce(
      (total, product) => total + product.price,
      0,
    );
  };
  const calculateShippingCharges = () => {
    return 0;
  };
  const calculateTotal = () => {
    return calculateSubTotal() + calculateShippingCharges();
  };
  const calculateOtherCharges = () => {
    return 198.15;
  };
  const handlePayNow = () => {};

  const isAddressFilled = true;
  return (
    <StyledRightDetails className='col-md-10'>
      {buyNowproductList.map((product, index) => (
        <ProductComponent key={index} {...product} />
      ))}
      <Grid container spacing={0}>
        <Grid item xs={10} pr={1} py={2}>
          <TextField
            fullWidth
            id="discountcode"
            label="Discount code"
            variant="outlined"
            margin="none"
            onChange={handleTextFieldChange}
          />
        </Grid>
        <Grid
          item
          xs={2}
          justifyContent={'center'}
          display={'flex'}
          direction={'column'}
        >
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={handleApply}
            disabled={discountCouponValue === ''}
            className="mr-2"
            sx={{ textTransform: 'none' }}
          >
            Apply
          </Button>
        </Grid>
      </Grid>

      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="subtitle1">Subtotal</Typography>
        <Typography variant="subtitle2">₹{calculateSubTotal()}</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="subtitle1">Shipping</Typography>
        <Typography variant="subtitle1">
          {isAddressFilled
            ? calculateShippingCharges() === 0
              ? 'Free'
              : `₹${calculateShippingCharges()}`
            : 'Enter shipping address'}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2">Total </Typography>
          <Typography variant="caption">
            Including ₹{calculateOtherCharges()} in taxes{' '}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display={'flex'}
          justifyContent={'end'}
          alignItems={'end'}
        >
          <Typography variant="subtitle2">INR ₹{calculateTotal()}</Typography>
        </Grid>
      </Grid>

      {isMobileTabletView && (
        <Button
          variant="contained"
          size="large"
          color="info"
          onClick={handlePayNow}
          fullWidth
          className="mt-4"
        >
          Pay Now
        </Button>
      )}
    </StyledRightDetails>
  );
};

export default RightDetailsComponent;
