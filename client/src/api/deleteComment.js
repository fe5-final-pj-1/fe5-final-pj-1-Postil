import { axiosInstanceURL } from './_axiosInstanceURL';

async function deleteComment(commentId) {
    try {
        const response = await axiosInstanceURL.delete(`/comments/${commentId}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteComment;
