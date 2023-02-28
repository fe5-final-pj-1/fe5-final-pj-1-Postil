import axios from 'axios';

async function searchForProducts(searchPhrases) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/products/search`, searchPhrases);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default searchForProducts;
