import { axiosInstanceURL } from './_axiosInstanceURL';

async function getWishList() {
    try {
        const response = await axiosInstanceURL.get(`/wishlist`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getWishList;
