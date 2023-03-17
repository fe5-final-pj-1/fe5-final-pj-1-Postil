import { axiosInstanceURL } from './_axiosInstanceURL';

async function addNewProduct(newProduct) {
    try {
        const response = await axiosInstanceURL.post(`/products`, newProduct);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addNewProduct;
