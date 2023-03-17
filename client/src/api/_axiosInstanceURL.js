import axios from 'axios';

export const axiosInstanceURL = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
});
