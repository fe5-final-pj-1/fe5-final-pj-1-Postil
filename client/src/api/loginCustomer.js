import { axiosInstanceURL } from './_axiosInstanceURL';

async function loginCustomer(userData) {
    try {
        const response = await axiosInstanceURL.post(`/customers/login`, userData);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default loginCustomer;
