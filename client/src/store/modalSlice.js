import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.modal = true;
        },
        hideModal(state) {
            state.modal = false;
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
