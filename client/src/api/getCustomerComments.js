import { axiosInstanceURL } from './_axiosInstanceURL';

async function getCustomerComments(customerId) {
    try {
        const response = await axiosInstanceURL.get(`/comments/customer/${customerId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getCustomerComments;
