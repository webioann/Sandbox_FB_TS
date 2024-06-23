import { createSlice } from "@reduxjs/toolkit";
import { ICountState } from "./redux_types";

const initialState: ICountState = {
    count: 0,
}

export const counter_slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        byAmount: (state, action) => {
            state.count += action.payload
        },
        resetCounter: state => {
            state.count = 0
        }
    }
})

export const { increment, decrement, byAmount, resetCounter } = counter_slice.actions;
export default counter_slice.reducer;
