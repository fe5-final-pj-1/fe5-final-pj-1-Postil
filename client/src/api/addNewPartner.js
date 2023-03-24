import { axiosInstanceURL } from './_axiosInstanceURL';

async function addNewPartner(newPartner) {
    try {
        const response = await axiosInstanceURL.post(`/partners`, newPartner);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addNewPartner;
