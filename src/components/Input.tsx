import React, { useState } from 'react'

const Input = () => {

    const [value, setValue] = useState<string>('')

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <div>
            <input 
                type='text' 
                value={value}
                placeholder='create ToDo'
                onChange={inputHandler}/>
            <button>Create ToDo </button>
        </div>
    )
}

export default Input;