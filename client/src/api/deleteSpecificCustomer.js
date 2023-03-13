import axios from 'axios';
async function deleteSpecificCustomer(customerID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.delete(`${REACT_APP_URL_API}/customers/${customerID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteSpecificCustomer;
