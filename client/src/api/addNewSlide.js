import { axiosInstanceURL } from './_axiosInstanceURL';

async function addNewSlide(newPromotion) {
    try {
        const response = await axiosInstanceURL.post(`/slides`, newPromotion);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addNewSlide;
