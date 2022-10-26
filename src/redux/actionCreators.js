import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "./baseURL";

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

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const disheshLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(disheshLoading());

        axios.get(baseURL + "Dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
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