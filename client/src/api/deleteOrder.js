import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteOrder(orderID) {
    try {
        const response = await axiosInstanceURL.delete(`/orders/${orderID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteOrder;
