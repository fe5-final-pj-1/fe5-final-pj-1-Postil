import { axiosInstanceURL } from './_axiosInstanceURL';

async function addNewComment(newComment) {
    try {
        const response = await axiosInstanceURL.post(`/comments`, newComment);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default addNewComment;
