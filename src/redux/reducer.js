import Dishes from "../data/dishes";
import Comments from "../data/comments";
import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';
import axios from "axios";
    
    //console.log(response.data);

const dishReducer = (dishState = Dishes, action) => {
    switch (action.type) {
        default:
            return dishState;
    }
}

const commentReducer = (commentState = Comments, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            //console.log(comment);
            return commentState.concat(comment)
        default:
            return commentState;

    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})