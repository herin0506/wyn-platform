import { Container } from '@mui/material';
import Cart from '@wyn/components/Cart/Cart';
import DiscoverCategoriesContainer from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import { Fragment } from 'react';

const CartPage = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Cart/>
      </Container>
      <DiscoverCategoriesContainer/>
    </Fragment>
  )
};

export default CartPage;
