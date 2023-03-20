import { axiosInstanceURL } from './_axiosInstanceURL';

const addSubscriber = async (newSubscriber) => {
    try {
        const response = await axiosInstanceURL.post(`/subscribers`, newSubscriber);
        return response;
    } catch (error) {
        console.error(error.message);
    }
};
export default addSubscriber;
