import React from 'react';
import styles from './ToDoItem.module.sass'

const ToDoItem = (props) => {

    const deleteTask = () => {
        const { id, deleteCallback } = props;
        deleteCallback(id);
    }

    return (
        <li>
            <div contentEditable="true" onInput={e => e.currentTarget.textContent} title='Edit task'>
                {props.text}
            </div>
            <button onClick={deleteTask}>X</button>
            {/* <button onClick={editTask}>Edit</button> */}
        </li>
    );
}

export default ToDoItem;
