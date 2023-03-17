import { axiosInstanceURL } from './_axiosInstanceURL';

async function createCustomer(newCustomer) {
    try {
        const response = await axiosInstanceURL.post(`/customers`, newCustomer);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default createCustomer;
