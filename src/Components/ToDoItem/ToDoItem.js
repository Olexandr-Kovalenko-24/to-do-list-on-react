import React from 'react';
import cx from 'classnames';
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

    const changeStatus = (event) => {
        const { id, statusCallback } = props;
        statusCallback(id, event.target.value);
    }

    // const cnames = cx([styles.input], {
    //     [styles.valid]: props.status,
    //     [styles.invalid]: !isInputValid
    // });

    return (
        <li>
            <article className={styles.task}>
                <EdiText
                    type='text'
                    value={props.text}
                    onSave={editItem}
                />
                <button onClick={deleteTask} className={styles.delete}></button>
                <select id="status" onChange={changeStatus} className={styles.status} >
                  <option value={props.status}>{props.status}</option>
                  <option value="Not done">Not done</option>
                  <option value="In process">In process</option>
                  <option value="Done task">Done task</option>
               </select>
            </article>
        </li>
    );
}

export default ToDoItem;
