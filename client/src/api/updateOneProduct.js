import axios from 'axios';

async function updateOneProduct(productID, updatedProduct) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(
            `${REACT_APP_URL_API}/products/${productID}`,
            updatedProduct,
        );
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateOneProduct;
