import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice ({
    name: 'loader',
    initialState: false,
    reducers: {
        isLoading: (state, action) => {
            return action.payload
        }
    }
})

export const {isLoading} = loaderSlice.actions;
export default loaderSlice.reducer