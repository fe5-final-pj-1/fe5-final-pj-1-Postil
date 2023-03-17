import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllCustomers() {
    try {
        const response = await axiosInstanceURL.get(`/customers`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllCustomers;
