import { axiosInstanceURL } from './_axiosInstanceURL';

async function decreaseProductQuantity(productID) {
    try {
        const response = await axiosInstanceURL.delete(`/cart/product/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default decreaseProductQuantity;
