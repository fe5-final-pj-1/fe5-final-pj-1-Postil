import { axiosInstanceURL } from './_axiosInstanceURL';

async function getCustomer() {
    try {
        const response = await axiosInstanceURL.get(`/customers/customer`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getCustomer;
