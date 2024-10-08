import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducer: {
        addComment: (state, action) => {
            console.log("addComment action.payload", action.payload);
            console.log("addComment state.commetnArray", state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            }
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) =>  {
    return state.comments.commentsArray.filter( 
        (comment) => comment.campsiteId===parseInt(campsiteId)
        );
};