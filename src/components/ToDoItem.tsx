import React from 'react'
import { IoTrashOutline } from 'react-icons/io5';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';
import '../CSS/todo.scss'

interface IPropsObject {
    todo: { 
        title: string
        complited: boolean
        timestamp: number
    };
}

const ToDoItem: React.FC<IPropsObject> = (props) => {

    return (
        <div className='todo-item'>
            { props.todo.complited ? <GrCheckboxSelected className='check-box'/> : <GrCheckbox className='check-box'/> }
            <h4 className='todo-title'>{props.todo.title}</h4>
            <p>{props.todo.timestamp}</p>
            <IoTrashOutline className='trash-basket'/>
        </div>
    )
}

export default ToDoItem;