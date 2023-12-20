import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

type cartPaylaodType = {
  cartItems: any[];
  cartTotal: number;
  instructions: string | null;
};

const initialState: cartPaylaodType = {
  cartItems: [],
  cartTotal: 0,
  instructions: null,
};

const calculateCartTotal = (cartItems: any[]) => {
  const total = cartItems.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator +
      Number(Number(currentValue?.price) * Number(currentValue?.qty)),
    0,
  );
  return total;
};

const addAndRemoveCartItemQty = (state: any, action: any) => {
  const _cartItemIndex = _.findIndex(
    state?.cartItems,
    (cartItem: any) => cartItem?._id === action?.payload?._id,
  );
  let cartItems: any[] = state?.cartItems;
  cartItems[_cartItemIndex].qty = action?.payload?.qty;
  return cartItems;
};

export const cartSlice: any = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCartItem: (state: any, action) => {
      const _findCartItem = _.find(
        state?.cartItems,
        (cartItem: any) => cartItem?._id === action?.payload?._id,
      );
      if (_findCartItem) {
        alert('This item already exist in cart');
      } else {
        state.cartItems = [...state.cartItems, action?.payload];
        state.cartTotal = calculateCartTotal(state.cartItems);
      }
    },
    removeCartItem: (state, action) => {
      const remainingCartItems = _.filter(
        state.cartItems,
        (cartItem: any) => cartItem?._id !== action?.payload?._id,
      );
      state.cartItems = remainingCartItems;
      state.cartTotal = calculateCartTotal(state.cartItems);
    },
    addItemQuantity: (state, action) => {
      let cartItems = addAndRemoveCartItemQty(state, action);
      state.cartItems = [...cartItems];
      state.cartTotal = calculateCartTotal(state.cartItems);
    },
    removeItemQuantity: (state, action) => {
      let cartItems = addAndRemoveCartItemQty(state, action);
      state.cartItems = [...cartItems];
      state.cartTotal = calculateCartTotal(state.cartItems);
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  addItemQuantity,
  removeItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
