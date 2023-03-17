import React from 'react';

const ToDoItem = (props) => {

    const deleteTask = () => {
        const { id, deleteCallback } = props;
        deleteCallback(id);
    }

    return (
        <li>{props.text} <button onClick={deleteTask}>X</button></li>
    );
}

export default ToDoItem;
