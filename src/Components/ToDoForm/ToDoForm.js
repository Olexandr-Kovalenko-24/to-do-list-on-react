import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ToDoForm.module.sass';

const ToDoForm = (props) => {
    const [task, setTask] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);

    const changeHandler = ({ target: { value } }) => {
        if (!value.trim()) {
            setIsInputValid(false)
        } else {
            setIsInputValid(true)
        }
        setTask(value)
    }

    const submitHandler = (event) => {
        if (task.trim()) {
            props.sendDataToParent(task);
        }
        event.preventDefault();
        setTask('')
        setIsInputValid(false);
    }

    const cleanInput = () => {
        setTask('')
    }

    const deleteAll = () => {
        setTask('')
        props.setTaskList([])
    }

    const cnames = cx([styles.input], {
        [styles.valid]: isInputValid,
        [styles.invalid]: !isInputValid
    });

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='type next task'
                value={task}
                name='task'
                onChange={changeHandler}
                className={cnames} />
            <button>Add task</button>
            <button onClick={cleanInput}>Clean</button>
            <button onClick={deleteAll}>Delete all</button>
        </form>
    );
}

export default ToDoForm;
