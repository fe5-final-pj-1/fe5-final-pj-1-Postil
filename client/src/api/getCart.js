import { axiosInstanceURL } from './_axiosInstanceURL';

async function getCart() {
    try {
        const response = await axiosInstanceURL.get(`/cart`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getCart;
