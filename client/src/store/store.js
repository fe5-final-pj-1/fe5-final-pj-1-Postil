import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        filters: filtersReducer,
    },
});

export default store;
