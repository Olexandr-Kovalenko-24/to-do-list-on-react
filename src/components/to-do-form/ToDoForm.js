import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ToDoForm.module.sass';

const ToDoForm = ({ sendDataToParent, setTaskList }) => {
    const [name, setName] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);

    const changeHandler = ({ target: { value } }) => {
        setIsInputValid(!!value.trim())
        setName(value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (name.trim()) {
            sendDataToParent(name);
        }
        setName('')
        setIsInputValid(false);
    }

    const cleanInput = () => {
        setName('')
    }

    const deleteAll = () => {
        let res = window.confirm('Are you sure that you want to delete all tasks?')
        if (res) {
            setName('')
            setTaskList([])
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input
                type='text'
                placeholder='type next task'
                value={name}
                name='name'
                onChange={changeHandler}
                className={cx([styles.input], {
                    [styles.valid]: isInputValid,
                    [styles.invalid]: !isInputValid
                })}
            />
            <section className={styles.buttons}>
                <button>Add task</button>
                <button onClick={cleanInput}>Clean</button>
                <button onClick={deleteAll}>Delete all</button>
            </section>
        </form>
    );
}

export default ToDoForm;
