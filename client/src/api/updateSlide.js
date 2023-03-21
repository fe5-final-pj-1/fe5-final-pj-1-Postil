import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateSlide(updatedData, slideId) {
    try {
        const response = await axiosInstanceURL.put(`/slides/${slideId}`, updatedData);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateSlide;
