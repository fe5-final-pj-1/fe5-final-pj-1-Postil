import { axiosInstanceURL } from './_axiosInstanceURL';

async function getAllProducts() {
    try {
        const response = await axiosInstanceURL.get(`/products`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllProducts;
