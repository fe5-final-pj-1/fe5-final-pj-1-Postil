import { axiosInstanceURL } from './_axiosInstanceURL';

async function createOrder(newOrder) {
    try {
        const response = await axiosInstanceURL.post(`/orders`, newOrder);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default createOrder;
