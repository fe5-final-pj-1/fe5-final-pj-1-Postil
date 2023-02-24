import axios from 'axios';

async function getFilteredProducts(queryString) {
    try {
        const response = await axios.get(
            `http://127.0.0.1:5000/api/products/filter?${queryString}`,
        );
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getFilteredProducts;
