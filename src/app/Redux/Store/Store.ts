import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CartSlice from "../reducer/CartSlice";


export const store = configureStore({
    reducer: {
        cartSlice: CartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
