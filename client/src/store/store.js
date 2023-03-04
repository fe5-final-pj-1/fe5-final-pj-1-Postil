import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchProductsReducer from './searchProductsSlice';
import filtersReducer from './filtersSlice';
import modalReducer from './modalSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        searchProducts: searchProductsReducer,
        filters: filtersReducer,
        modal: modalReducer,
    },
});

export default store;
