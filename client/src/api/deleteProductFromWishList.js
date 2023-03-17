import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteProductFromWishList(productID) {
    try {
        const response = await axiosInstanceURL.delete(`/wishlist/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteProductFromWishList;
