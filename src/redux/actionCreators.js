import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "./baseURL";

export const addComment = (dishId, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toDateString();

    axios.post(baseURL + "Comments", newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const disheshLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})

export const dishesFailed = errMsg => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMsg,
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(disheshLoading());

        axios.get(baseURL + "Dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
    }
}

export const commentLoading = () => ({
    type: actionTypes.LOADING_COMMENTS
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseURL + "Comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}