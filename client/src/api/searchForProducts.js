import { axiosInstanceURL } from './_axiosInstanceURL';

async function searchForProducts(searchPhrases) {
    try {
        const response = await axiosInstanceURL.post(`/products/search`, searchPhrases);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default searchForProducts;
