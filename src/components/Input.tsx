import React, { useState } from 'react'
import '../CSS/input.scss'

const Input = () => {

    const [value, setValue] = useState<string>('')

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <form className='input-form'>
            <input 
                type='text' 
                value={value}
                placeholder='create ToDo'
                onChange={inputHandler}/>
            <button>Create ToDo </button>
        </form>
    )
}

export default Input;