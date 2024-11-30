import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter_slice'
import postsReducer from './posts_slice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
    }
})
