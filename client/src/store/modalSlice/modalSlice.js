import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal() {
            return true;
        },
        hideModal() {
            return false;
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
