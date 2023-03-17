import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteSpecificCustomer(customerID) {
    try {
        const response = await axiosInstanceURL.delete(`/customers/${customerID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteSpecificCustomer;
