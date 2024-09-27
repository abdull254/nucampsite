import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducer: {
        setCurrentUser: (state, action) => {
            return {
                ...state, currentUser:action.payload 
            }
        }
    } 
});

export const userReducer = userSlice.reducer;

export const selectCurrentUser = (state) => {
    return state.user.currentUser
}