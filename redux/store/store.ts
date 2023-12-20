import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../reducers/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cartSlice']
};

const rootReducer = combineReducers({
  cartSlice: cartSlice.reducer,
});
const persistedCartReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedCartReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
