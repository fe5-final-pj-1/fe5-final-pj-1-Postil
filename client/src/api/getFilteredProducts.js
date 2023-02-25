import axios from 'axios';

async function getFilteredProducts(queryString) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${REACT_APP_URL_API}/products/filter?${queryString}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getFilteredProducts;
