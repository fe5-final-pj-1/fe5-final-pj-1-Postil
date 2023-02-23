import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/CartPage/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
