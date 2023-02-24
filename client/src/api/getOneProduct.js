import axios from 'axios';

async function getOneProduct(productId) {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/api/products/${productId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getOneProduct;
