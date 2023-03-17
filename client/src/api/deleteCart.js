import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteCart() {
    try {
        const response = await axiosInstanceURL.delete(`/cart`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteCart;
