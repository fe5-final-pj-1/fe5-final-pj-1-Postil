import axios from 'axios';

async function getSpecificOrder(orderNo) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${REACT_APP_URL_API}/orders/${orderNo}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getSpecificOrder;
