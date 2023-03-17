import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateOrder(updatedInfo, orderID) {
    try {
        const response = await axiosInstanceURL.put(`/orders/${orderID}`, updatedInfo);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateOrder;
