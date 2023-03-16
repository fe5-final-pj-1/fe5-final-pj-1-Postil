import axios from 'axios';

async function updateOrder(updatedInfo, orderID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${REACT_APP_URL_API}/orders/${orderID}`, updatedInfo);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateOrder;
