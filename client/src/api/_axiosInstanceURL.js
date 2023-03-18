import axios from 'axios';
import store from 'store/store';
import { userLogOut } from '../store/loginSlice';

export const axiosInstanceURL = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
});

axiosInstanceURL.interceptors.request.use(
    async (config) => {
        const state = store.getState();
        const token = state.store.login.token;
        const expirationTime = state.store.login.expirationTime;
        if (token) {
            const dateMs = Date.now();
            const dateS = dateMs / 1000;
            const expired = dateS >= expirationTime ? true : false;
            if (expired) {
                const error = new Error('Token is expired');
                store.dispatch(userLogOut());
                delete config.headers.Authorization;
                return Promise.reject(error);
            } else {
                config.headers.Authorization = token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
