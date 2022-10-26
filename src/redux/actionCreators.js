import * as actionTypes from "./actionTypes";

export const addComment = (dishId, author, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            comment: comment,
        }
    }
}