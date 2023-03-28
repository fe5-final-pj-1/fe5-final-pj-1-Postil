import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    customerData: {},
    paymentMethod: {},
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProductsToOrder(state, action) {
            state.products = action.payload;
        },
        addCustomerDataToOrder(state, action) {
            state.customerData = action.payload;
        },
        addPaymentMethod(state, action) {
            state.paymentMethod = action.payload;
        },
        clearOrderState() {
            return {
                products: [],
                customerData: {},
                paymentMethod: {},
            };
        },
    },
});

export const { addProductsToOrder, addCustomerDataToOrder, addPaymentMethod, clearOrderState } =
    orderSlice.actions;

export default orderSlice.reducer;
