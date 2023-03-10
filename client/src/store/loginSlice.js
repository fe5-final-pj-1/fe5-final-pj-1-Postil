import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogIn: false,
    token: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogIn(state, action) {
            state.isLogIn = true;
            state.token = action.payload;
        },
        userLogOut(state) {
            state.isLogIn = false;
            state.token = '';
        },
    },
});

export const { userLogIn, userLogOut } = loginSlice.actions;

export default loginSlice.reducer;
