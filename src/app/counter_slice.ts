import { createSlice } from "@reduxjs/toolkit";

export interface ICountState {
    count: number;
}

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

    }
})

export const { increment, decrement } = counter_slice.actions;
export default counter_slice.reducer;
