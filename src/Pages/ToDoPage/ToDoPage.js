import React, { useState } from 'react';
import ToDoForm from '../../Components/ToDoForm/ToDoForm';
import ToDoItem from '../../Components/ToDoItem/ToDoItem';
import styles from './ToDoPage.module.sass';

const ToDoPage = () => {
    const [taskList, setTaskList] = useState([]);

    const mapList = () => {
        console.log(taskList)
        return taskList.map(elem => 
            elem.isShow ? 
        <ToDoItem text={elem.body} key={elem.id} id={elem.id} status={elem.status} deleteCallback={deleteItem} editCallvack={editItem} statusCallback={changeStatus} />
        : []);
    }

    const addNewItem = (data) => {
        const todoObject = {
            body: data,
            id: new Date().getTime(),
            status: "Not done",
            isShow: true
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

    const changeStatus = (id, data) => {
        const item = taskList.filter(obj => obj.id === id)
        item.forEach(task => task.status = data)
        setTaskList([...taskList]);
    }

    const notDone = () => {
        const filteredArray = taskList.filter(obj => obj.status !== "Not done")
        filteredArray.forEach(task => task.isShow = false)
        const yes = taskList.filter(obj => obj.status === "Not done")
        yes.forEach(task => task.isShow = true)
        setTaskList([...taskList]);
    }
    
    const inProcess = () => {
        const filteredArray = taskList.filter(obj => obj.status !== "In process")
        filteredArray.forEach(task => task.isShow = false)
        const yes = taskList.filter(obj => obj.status === "In process")
        yes.forEach(task => task.isShow = true)
        setTaskList([...taskList]);
    }

    const done = () => {
        const filteredArray = taskList.filter(obj => obj.status !== "Done task")
        filteredArray.forEach(task => task.isShow = false)
        const yes = taskList.filter(obj => obj.status === "Done task")
        yes.forEach(task => task.isShow = true)
        setTaskList([...taskList]);
    }
    
    const allTasks = () => {
        taskList.forEach(task => task.isShow = true)
        setTaskList([...taskList]);
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>To-Do-List</h1>
            <section className={styles['todo-part']}>
                <article>
                    <ToDoForm sendDataToParent={addNewItem} setTaskList={setTaskList} />
                    <section className={styles.buttons}>
                        <button onClick={notDone}>Not done tasks</button>
                        <button onClick={inProcess}>Tasks in process</button>
                        <button onClick={done}>Done tasks</button>
                        <button onClick={allTasks}>All tasks</button>
                    </section>
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
