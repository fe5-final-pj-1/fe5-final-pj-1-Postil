import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            if (state.map((item) => item.product).includes(action.payload)) {
                const findCart = state.find((item) => item.product === action.payload);
                const filteredCart = state.filter((item) => item.product !== action.payload);
                return [
                    ...filteredCart,
                    { product: action.payload, cartQuantity: findCart.cartQuantity + 1 },
                ];
            } else {
                return [...state, { product: action.payload, cartQuantity: 1 }];
            }
        },
        removeItem(state, action) {
            if (state.length) {
                return state.filter((item) => item.product !== action.payload);
            }
        },
        decreaseProduct(state, action) {
            const newCart = state.filter((item) => item.product !== action.payload);
            const findCart = state.find((item) => item.product === action.payload);
            if (findCart.cartQuantity > 1) {
                return [
                    ...newCart,
                    { product: findCart.product, cartQuantity: findCart.cartQuantity - 1 },
                ];
            }
        },
        changeQuantity(state, action) {
            const newCart = state.filter((item) => item.product !== action.payload.id);
            const findCart = state.find((item) => item.product === action.payload.id);
            return [
                ...newCart,
                { product: findCart.product, cartQuantity: action.payload.quantity },
            ];
        },
        removeAllItems() {
            return [];
        },
    },
});

export const { itemAdded, removeItem, decreaseProduct, changeQuantity, removeAllItems } =
    cartSlice.actions;

export default cartSlice.reducer;
