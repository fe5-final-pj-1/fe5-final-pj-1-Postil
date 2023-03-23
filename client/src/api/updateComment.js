import { axiosInstanceURL } from './_axiosInstanceURL';

async function updateComment(updatedComment, commentId) {
    try {
        const response = await axiosInstanceURL.put(`/comments/${commentId}`, updatedComment);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

export default updateComment;
