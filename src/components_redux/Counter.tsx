import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, byAmount, resetCounter } from '../app/counter_slice'
import { IReduxState } from '../app/redux_types'
import './app.css'

const Counter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector((state: IReduxState) => state.counter.count)
    const [amount, setAmount] = useState(0)
    const addedValue = Number(amount) || 0 ;

    function resetAll() {
        setAmount(0)
        dispatch(resetCounter())
    }

    return (
        <section className='counter'>
            <h1>{count}</h1>
            <input 
                type='text' 
                value={amount} 
                onChange={e => setAmount(Number(e.target.value))}
            />
            <button onClick={() => dispatch(byAmount(amount))}>SUBMIT</button>
            <button onClick={() => dispatch(increment())} className='first-btn'>increment +</button>
            <button onClick={() => dispatch(decrement())}>decrement -</button>
            <button onClick={resetAll}>RESET</button>
        </section>
    )
}

export default Counter