import { axiosInstanceURL } from './_axiosInstanceURL';

async function getLimitedComments(startPage, perPage) {
    try {
        const response = await axiosInstanceURL.get(
            `/comments/limit?startPage=${startPage}&perPage=${perPage}`,
        );
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default getLimitedComments;
