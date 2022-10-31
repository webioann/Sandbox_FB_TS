import React from 'react'
import { IoTrashOutline } from 'react-icons/io5';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';

interface IPropsObject {
    todo: { 
        title: string
        complited: boolean
        timestamp: string
    };
}

const ToDoItem: React.FC<IPropsObject> = (props) => {

    return (
        <div >
            { props.todo.complited ? <GrCheckboxSelected/> : <GrCheckbox/> }
            <h3>{props.todo.title}</h3>
            <p>{props.todo.timestamp}</p>
            <IoTrashOutline/>
        </div>
    )
}

export default ToDoItem;