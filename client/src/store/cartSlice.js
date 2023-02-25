import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            const cart = [...state, action.payload];
            return cart;
        },
    },
});

export const { itemAdded } = cartSlice.actions;

export default cartSlice.reducer;
