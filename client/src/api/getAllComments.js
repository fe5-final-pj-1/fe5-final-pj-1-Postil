import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllComments() {
    try {
        const response = await axiosInstanceURL.get(`/comments`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllComments;
