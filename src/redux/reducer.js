import Dishes from "../data/dishes";
import Comments from "../data/comments";

const initialState = {
    dishes: Dishes ,
    comments: Comments,
}

export const Reducer = (state = initialState, action) => {
    if( action.type === 'ADD_COMMENT' ){
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();         
        //console.log(comment);
        return {
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state;
}