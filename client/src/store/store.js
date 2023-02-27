import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        filters: filtersReducer,
    },
});

export default store;
