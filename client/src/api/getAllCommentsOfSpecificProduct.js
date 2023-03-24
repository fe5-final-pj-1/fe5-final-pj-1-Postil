import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllCommentsOfSpecificProduct(productId) {
    try {
        const response = await axiosInstanceURL.get(`/comments/product/${productId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllCommentsOfSpecificProduct;
