import axios from 'axios';

async function getAllProducts() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/products');
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getAllProducts;
