import axios from 'axios';

async function cancelOrder(orderID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${REACT_APP_URL_API}/orders/cancel/${orderID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default cancelOrder;
