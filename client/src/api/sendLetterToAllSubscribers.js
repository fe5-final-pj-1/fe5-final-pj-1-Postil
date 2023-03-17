import { axiosInstanceURL } from './_axiosInstanceURL';

async function sendLetterToAllSubscribers(letter) {
    try {
        const response = await axiosInstanceURL.post(`/subscribers/send`, letter);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default sendLetterToAllSubscribers;
