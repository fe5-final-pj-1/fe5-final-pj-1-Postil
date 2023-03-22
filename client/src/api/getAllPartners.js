import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllPartners() {
    try {
        const response = await axiosInstanceURL.get(`/partners`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllPartners;
