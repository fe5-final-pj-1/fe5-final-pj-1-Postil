import axios from 'axios';

async function addNewSlide(newPromotion) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/slides`, newPromotion);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addNewSlide;
