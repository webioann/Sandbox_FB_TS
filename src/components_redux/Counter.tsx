import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../app/counter_slice'
import { IReduxState } from '../app/store'
import './app.css'

const Counter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector((state: IReduxState) => state.counter.count)

    return (
    <section className='counter'>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment +</button>
        <button onClick={() => dispatch(decrement())}>decrement -</button>
    </section>
)
}

export default Counter