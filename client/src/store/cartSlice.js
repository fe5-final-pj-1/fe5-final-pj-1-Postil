import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            if (state.map((item) => item.product).includes(action.payload)) {
                return state.map((item) => {
                    if (item.product === action.payload) {
                        return { product: action.payload, cartQuantity: item.cartQuantity + 1 };
                    } else return item;
                });
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
            const findCart = state.find((item) => item.product === action.payload);
            if (findCart.cartQuantity > 1) {
                return state.map((item) => {
                    if (item.product === action.payload) {
                        return { product: action.payload, cartQuantity: item.cartQuantity - 1 };
                    } else return item;
                });
            }
        },
        changeQuantity(state, action) {
            return state.map((item) => {
                if (item.product === action.payload.id) {
                    return { product: action.payload.id, cartQuantity: action.payload.quantity };
                } else return item;
            });
        },
        removeAllItems() {
            return [];
        },
    },
});

export const { itemAdded, removeItem, decreaseProduct, changeQuantity, removeAllItems } =
    cartSlice.actions;

export default cartSlice.reducer;
