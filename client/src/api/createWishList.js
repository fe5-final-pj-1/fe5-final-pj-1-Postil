import { axiosInstanceURL } from './_axiosInstanceURL';

async function createWishList(newWishlist) {
    try {
        const response = await axiosInstanceURL.post(`/wishlist`, newWishlist);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default createWishList;
