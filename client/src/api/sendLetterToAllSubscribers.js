import axios from 'axios';

async function sendLetterToAllSubscribers(letter) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/subscribers/send`, letter);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default sendLetterToAllSubscribers;
