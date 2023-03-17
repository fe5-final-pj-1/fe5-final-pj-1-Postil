import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateCart(updatedCart) {
    try {
        const response = await axiosInstanceURL.put(`/cart`, updatedCart);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateCart;
