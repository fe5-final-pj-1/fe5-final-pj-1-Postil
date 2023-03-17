import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteProductFromCart(productID) {
    try {
        const response = await axiosInstanceURL.delete(`/cart/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteProductFromCart;
