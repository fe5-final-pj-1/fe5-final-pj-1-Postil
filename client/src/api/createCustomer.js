import axios from 'axios';

async function createCustomer(newCustomer) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/customers`, newCustomer);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default createCustomer;
