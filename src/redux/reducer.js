import Comments from "../data/comments";
import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';

//console.log(response.data);

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }

        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }

        default:
            return dishState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            //console.log(comment);
            return commentState.concat(comment)
        
            case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }

        case actionTypes.LOADING_COMMENTS:
            return {
                ...commentState,
                isLoading: true,
                comments: [],
            }

        default:
            return commentState;

    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})