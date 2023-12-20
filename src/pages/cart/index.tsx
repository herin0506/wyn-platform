import { Container } from '@mui/material';
import Cart from '@wyn/components/Cart/Cart';
import DiscoverCategoriesContainer from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import { Fragment } from 'react';

const CartPage = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        {/* old cart page
        <Cart/> */}
      </Container>
      <DiscoverCategoriesContainer/>
    </Fragment>
  )
};

export default CartPage;
