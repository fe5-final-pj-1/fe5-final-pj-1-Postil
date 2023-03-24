import { axiosInstanceURL } from './_axiosInstanceURL';

async function addProductToWishList(productID) {
    try {
        const response = await axiosInstanceURL.put(`/wishlist/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addProductToWishList;
