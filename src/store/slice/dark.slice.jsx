import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name: 'dark',
    initialState: false,
    reducers: {
        isDark: state =>{
            return !state
        }
    }
})

export const {isDark} = darkSlice.actions;
export default darkSlice.reducer