import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteSubscriberFromDB(subscriberID) {
    try {
        const response = await axiosInstanceURL.delete(`/subscribers/${subscriberID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteSubscriberFromDB;
