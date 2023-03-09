import axios from 'axios';
async function decreaseProductQuantity(productID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.delete(`${REACT_APP_URL_API}/cart/product/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default decreaseProductQuantity;
