import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllSlides() {
    try {
        const response = await axiosInstanceURL.get(`/slides`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllSlides;
