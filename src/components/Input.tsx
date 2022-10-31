import React, { useState, useContext } from 'react'
import { collection, addDoc, } from "firebase/firestore"; 
import { db } from "../firebase-config";

import '../CSS/input.scss'

const Input = () => {

    const [value, setValue] = useState<string>('')
    const todosCollection = collection(db, "todos")

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const addToDo = async () => {
        if( value.length > 0 ) {
            await addDoc(todosCollection, 
                { 
                    complited: false, 
                    timestamp: Date.now(),
                    title: value
                }
            );
        }
        else return
    };

    return (
        <form 
            className='input-form' 
            onSubmit={(event) => {
                event.preventDefault()
                setValue('')
            }}>
            <input 
                type='text' 
                value={value}
                placeholder='create ToDo'
                onChange={inputHandler}/>
            <button onClick={addToDo}>Create ToDo </button>
        </form>
    )
}
export default Input;