import { axiosInstanceURL } from './_axiosInstanceURL';

async function getFilteredProducts(queryString) {
    try {
        const response = await axiosInstanceURL.get(`/products/filter?${queryString}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getFilteredProducts;
