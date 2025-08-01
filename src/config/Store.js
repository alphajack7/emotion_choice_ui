import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/AuthSlice'
import postReducer from '../slice/postSlice'
export const store= configureStore({
    reducer:{
        auth:authReducer,
        post:postReducer

    }
})