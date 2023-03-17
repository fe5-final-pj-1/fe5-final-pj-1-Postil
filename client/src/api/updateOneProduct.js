import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateOneProduct(productID, updatedProduct) {
    try {
        const response = await axiosInstanceURL.put(`/products/${productID}`, updatedProduct);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateOneProduct;
