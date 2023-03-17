import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllSubscribers() {
    try {
        const response = await axiosInstanceURL.get(`/subscribers`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllSubscribers;
