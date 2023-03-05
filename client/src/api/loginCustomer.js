import axios from 'axios';

async function loginCustomer(userData) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/customers/login`, userData);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default loginCustomer;
