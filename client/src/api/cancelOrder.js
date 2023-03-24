import { axiosInstanceURL } from './_axiosInstanceURL';

async function cancelOrder(orderID) {
    try {
        const response = await axiosInstanceURL.put(`/orders/cancel/${orderID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default cancelOrder;
