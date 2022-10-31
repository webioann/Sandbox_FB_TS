import React from 'react'
import { IoTrashOutline } from 'react-icons/io5';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';
import { collection, deleteDoc, updateDoc, doc } from "firebase/firestore"; 
import { db } from "../firebase-config";
import '../CSS/todo.scss'
interface IToDo {
    id: string
    title: string
    complited: boolean
    timestamp: number
}

interface IPropsObject {
    todo: IToDo
}

const ToDoItem: React.FC<IPropsObject> = ({ todo }) => {

    const deleteTodo = async (id: string) => {
        const removedDoc = doc(db, "todos", id);
        await deleteDoc(removedDoc);
    };

    const updateTodo = async (id: string, complited: boolean) => {
        const todoDoc = doc(db, "todos", id);
        const newFields = { complited: !complited };
        await updateDoc(todoDoc, newFields);
    };

    return (
        <div className='todo-item'>
            { todo.complited 
                ? <GrCheckboxSelected 
                    className='check-box'
                    onClick={() => {updateTodo(todo.id, todo.complited)}}/> 
                : <GrCheckbox 
                    className='check-box'
                    onClick={() => {updateTodo(todo.id, todo.complited)}}/> 
            }
            <h4 className={todo.complited ? 'todo-title complited' : 'todo-title'}>{todo.title}</h4>
            <p>{todo.timestamp}</p>
            <IoTrashOutline 
                className='trash-basket'
                onClick={() => {deleteTodo(todo.id)}}/>
        </div>
    )
}

export default ToDoItem;