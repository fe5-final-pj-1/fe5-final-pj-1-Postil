import { axiosInstanceURL } from './_axiosInstanceURL';

async function getOneProduct(productId) {
    try {
        const response = await axiosInstanceURL.get(`/products/${productId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getOneProduct;
