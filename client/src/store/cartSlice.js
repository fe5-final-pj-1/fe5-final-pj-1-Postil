import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            return action.payload;
        },
    },
});

export const { itemAdded } = cartSlice.actions;

export default cartSlice.reducer;
