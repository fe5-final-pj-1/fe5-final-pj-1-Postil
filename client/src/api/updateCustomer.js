import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateCustomer(updatedCustomer) {
    try {
        const response = await axiosInstanceURL.put(`/customers`, updatedCustomer);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateCustomer;
