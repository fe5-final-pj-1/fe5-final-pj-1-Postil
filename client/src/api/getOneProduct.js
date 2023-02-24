import axios from 'axios';

async function getOneProduct(productId) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${REACT_APP_URL_API}/products/${productId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getOneProduct;
