import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    cartItems: any[];
    cartTotal: number;
    totalItems: number;
};

const initialState:CartState = {
    cartItems: [
        {    
        id: 4,
        imgUrl: '/images/product_4.svg',
        title: 'Soothing Vaginal cream for Menopause',
        brand: 'Tried & Trusted',
        rating: 5,
        price: 849,
        quantity: 1,
        },
    ],
    cartTotal: 0, // This is the total amount of the cart
    totalItems: 0, // This is the total number of items in the cart
};
const cartTotal = (cartItems: any[]) => {
    let totalPrice =0;
    for (let item of cartItems) {
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };
  const totalItemsInCart = (cartItems:any[])=>{
    let totalItems = 0;
    cartItems.forEach((item:any)=>{
      totalItems += item.quantity;
    });
    return totalItems;
  };

export const CartSlice: any = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.cartItems[index].quantity = state.cartItems[index].quantity + 1;
            } else {
                state.cartItems = [...state.cartItems, action.payload];
            }
            state.cartTotal = cartTotal(state.cartItems);
            state.totalItems = totalItemsInCart(state.cartItems);
        },
        removeFromCart: (state, action) => {
            const remainingItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = remainingItems;
            state.cartTotal = cartTotal(state.cartItems);
            state.totalItems = totalItemsInCart(state.cartItems);
        },
        increaseQuantity: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.cartItems[index].quantity = action.payload.quantity;
                state.cartTotal = cartTotal(state.cartItems);
                state.totalItems = totalItemsInCart(state.cartItems);
            }
        },
        decreaseQuantity: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.cartItems[index].quantity = action.payload.quantity;
                if (state.cartItems[index].quantity === 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                }
                state.cartTotal = cartTotal(state.cartItems);
                state.totalItems = totalItemsInCart(state.cartItems);
            }
        },
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
