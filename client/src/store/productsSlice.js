import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts(state, action) {
            const products = action.payload;
            return products;
        },
    },
});

export const { loadProducts } = productsSlice.actions;

export default productsSlice.reducer;
