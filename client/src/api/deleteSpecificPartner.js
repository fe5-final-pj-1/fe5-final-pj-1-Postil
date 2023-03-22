import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteSpecificPartner(customID) {
    try {
        const response = await axiosInstanceURL.delete(`/partners/${customID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteSpecificPartner;
