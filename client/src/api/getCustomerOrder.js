import { axiosInstanceURL } from './_axiosInstanceURL';

async function getCustomerOrder() {
    try {
        const response = await axiosInstanceURL.get(`/orders`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getCustomerOrder;
