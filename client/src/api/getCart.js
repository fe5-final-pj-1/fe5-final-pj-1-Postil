import axios from 'axios';

async function getCart() {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${REACT_APP_URL_API}/cart`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getCart;
