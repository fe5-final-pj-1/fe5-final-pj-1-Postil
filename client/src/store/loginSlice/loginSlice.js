import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogIn: false,
    token: '',
    expirationTime: 0,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogIn(state, action) {
            state.isLogIn = true;
            state.token = action.payload.token;
            state.expirationTime = action.payload.expirationTime;
        },
        userLogOut(state) {
            state.isLogIn = false;
            state.token = '';
            state.expirationTime = 0;
        },
    },
});

export const { userLogIn, userLogOut } = loginSlice.actions;

export default loginSlice.reducer;
