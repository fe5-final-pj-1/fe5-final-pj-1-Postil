import axios from 'axios';

async function createOrder(newOrder) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/orders`, newOrder);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default createOrder;
