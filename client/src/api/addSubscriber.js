//EMAIL: finalproject2090@gmail.com
// PASSWORD: Final_Project_2090
import axios from 'axios';

const addSubscriber = async (newSubscriber) => {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/subscribers`, newSubscriber);
        return response;
    } catch (error) {
        console.error(error.message);
    }
};
export default addSubscriber;
