import React, { useState } from 'react';
import ToDoForm from '../../Components/ToDoForm/ToDoForm';
import ToDoItem from '../../Components/ToDoItem/ToDoItem';
import styles from './ToDoPage.module.sass';

const ToDoPage = () => {
    const [taskList, setTaskList] = useState([]);

    const mapList = () => {
        console.log(taskList)
        return taskList.map(elem => <ToDoItem text={elem.body} key={elem.id} id={elem.id} deleteCallback={deleteItem} editCallvack={editItem} />);
    }

    const addNewItem = (data) => {
        const todoObject = {
            body: data,
            id: new Date().getTime()
        }
        setTaskList([...taskList, todoObject]);
    }

    const deleteItem = (id) => {
        const filteredArray = taskList.filter(obj => obj.id !== id)
        setTaskList(filteredArray);
    }

    const editItem = (id, data) => {
        const item = taskList.filter(obj => obj.id === id)
        item.forEach(task => task.body = data)
        setTaskList([...taskList]);
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>To-Do-List</h1>
            <section className={styles['todo-part']}>
                <article>
                    <ToDoForm sendDataToParent={addNewItem} setTaskList={setTaskList} />
                </article>
                <article className={styles.tasks}>
                    {taskList.length !== 0 ? 
                                            <ul>{mapList()}</ul> : 
                                                                    <div className={styles.empty}>You don't have tasks yet</div>}
                </article>
            </section>
        </main>
    );
}

export default ToDoPage;
