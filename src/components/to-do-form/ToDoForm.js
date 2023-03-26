import React, { useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './ToDoForm.module.sass';
import { addTask, deleteAllTask } from '../../actions/actionCreators';

const ToDoForm = ({ addTask,
                    deleteAllTask }) => {

    const [name, setName] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);

    const changeHandler = ({ target: { value } }) => {
        setIsInputValid(!!value.trim())
        setName(value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (name.trim()) {
            addTask({
                title: name,
                id: new Date().getTime(),
                execution: "not done"
            });
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
            deleteAllTask()
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

const mapDispatchToProps = {
    addTask,
    deleteAllTask
}

export default connect(null, mapDispatchToProps)(ToDoForm);
