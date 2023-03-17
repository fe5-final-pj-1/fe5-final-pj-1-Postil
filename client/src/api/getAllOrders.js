import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllOrders() {
    try {
        const response = await axiosInstanceURL.get(`/orders/all`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllOrders;
