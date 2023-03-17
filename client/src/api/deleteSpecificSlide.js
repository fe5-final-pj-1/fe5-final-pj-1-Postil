import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteSpecificSlide(slideID) {
    try {
        const response = await axiosInstanceURL.delete(`/slides/${slideID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteSpecificSlide;
