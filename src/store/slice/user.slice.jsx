import { createSlice } from '@reduxjs/toolkit';
// import { isLoading } from './loader.slice'
// import axios from 'axios';
// import { setToken} from './token.slice';


export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers:{
        setUser: (state, action) => action.payload,
    },
})

export const { setUser  } = userSlice.actions;
export default userSlice.reducer



