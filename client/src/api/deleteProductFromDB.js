import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteProductFromDB(id) {
    try {
        const response = await axiosInstanceURL.delete(`/products/${id}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteProductFromDB;
