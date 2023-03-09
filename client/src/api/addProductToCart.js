import axios from 'axios';

async function addProductToCart(productID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${REACT_APP_URL_API}/cart/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addProductToCart;
