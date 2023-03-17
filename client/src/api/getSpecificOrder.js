import { axiosInstanceURL } from './_axiosInstanceURL';

async function getSpecificOrder(orderNo) {
    try {
        const response = await axiosInstanceURL.get(`/orders/${orderNo}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getSpecificOrder;
