import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ToDoForm.module.sass';

const ToDoForm = (props) => {
    const [task, setTask] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);

    const changeHandler = ({ target: { value } }) => {
        if (value.includes(' ')) {
            setIsInputValid(false)
        } else {
            setIsInputValid(true)
        }
        setTask(value)
    }

    const submitHandler = (event) => {
        if (task) {
            event.preventDefault();
            props.sendDataToParent(task);
            setTask('')
        } else {
            event.preventDefault();
        }
        setIsInputValid(false);
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
            <button>Add to list</button>
        </form>
    );
}

export default ToDoForm;
