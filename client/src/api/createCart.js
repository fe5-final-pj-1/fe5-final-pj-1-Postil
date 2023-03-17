import { axiosInstanceURL } from './_axiosInstanceURL';

async function createCart(newCart) {
    try {
        const response = await axiosInstanceURL.post(`/cart`, newCart);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default createCart;
