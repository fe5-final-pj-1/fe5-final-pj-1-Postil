import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const searchProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts(state, action) {
            return action.payload;
        },
    },
});

export const { loadProducts } = searchProductsSlice.actions;

export default searchProductsSlice.reducer;
