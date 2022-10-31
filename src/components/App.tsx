import React, { useState, useEffect } from 'react'
import { useGetToDoCollection } from '../hooks/useGetToDoCollection';
import ToDoItem from './ToDoItem';
import Input from './Input';
import '../CSS/app.scss'
interface IToDo {
    id?: string
    title: string
    complited: boolean
    timestamp: string
}

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
