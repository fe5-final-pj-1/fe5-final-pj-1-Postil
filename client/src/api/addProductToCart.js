import { axiosInstanceURL } from './_axiosInstanceURL';

async function addProductToCart(productID) {
    try {
        const response = await axiosInstanceURL.put(`/cart/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addProductToCart;
