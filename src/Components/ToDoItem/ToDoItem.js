import React from 'react';
import styles from './ToDoItem.module.sass'
import EdiText from 'react-editext'

const ToDoItem = (props) => {

    const deleteTask = () => {
        const { id, deleteCallback } = props;
        deleteCallback(id);
    }

    const editItem = (value) => {
        const { id, editCallvack } = props;
        editCallvack(id, value);
    }

    return (
        <li>
            <article className={styles.task}>
                <EdiText
                    type='text'
                    value={props.text}
                    onSave={editItem}
                />
                <button onClick={deleteTask} className={styles.delete}></button>
            </article>
        </li>
    );
}

export default ToDoItem;
