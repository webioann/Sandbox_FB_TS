import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter_slice'

interface ICountState {
    count: number
}

export interface IReduxState {
    counter: ICountState
}

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
