import axios from 'axios';
async function deleteCart() {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.delete(`${REACT_APP_URL_API}/cart`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteCart;
