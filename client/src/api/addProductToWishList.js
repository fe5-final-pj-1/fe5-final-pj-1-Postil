import axios from 'axios';

async function addProductToWishList(productID) {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${REACT_APP_URL_API}/wishlist/${productID}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addProductToWishList;
