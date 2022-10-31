import React, { useState, useEffect } from 'react'
import { useGetToDoCollection } from '../hooks/useGetToDoCollection';
import ToDoItem from './ToDoItem';
import Input from './Input';
import '../CSS/app.scss'


function App() {

    const todos = useGetToDoCollection()

    return (
        <div className='container'>
            <Input/>
            <ul className='todos-list'>
                { todos.map(todo => (
                    <ToDoItem todo={todo} key={todo.id}/>
                ))}
            </ul>
        </div>
    )
}
export default App;
