import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchProductsReducer from './searchProductsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        searchProducts: searchProductsReducer,
        filters: filtersReducer,
    },
});

export default store;
