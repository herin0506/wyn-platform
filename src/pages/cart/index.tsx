import { Container } from '@mui/material';
import AkCart from '@wyn/components/Cart/AkCart';
import Cart from '@wyn/components/Cart/Cart';
import DiscoverCategoriesContainer from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import { Fragment } from 'react';

const CartPage = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        {/* old cart page
        <Cart/> */}
        <AkCart />
      </Container>
      <DiscoverCategoriesContainer/>
    </Fragment>
  )
};

export default CartPage;
