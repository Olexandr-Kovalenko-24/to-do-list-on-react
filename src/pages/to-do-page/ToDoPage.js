import React, { useState } from 'react';
import ToDoForm from '../../components/to-do-form/ToDoForm';
import ToDoItem from '../../components/to-do-item/ToDoItem';
import styles from './ToDoPage.module.sass';

const ToDoPage = () => {
    const [taskList, setTaskList] = useState([]);
    const [filter, setFilter] = useState('all');

    const addNewItem = (data) => {
        const todoObject = {
            name: data,
            id: new Date().getTime(),
            execution: "not done"
        }
        setTaskList([...taskList, todoObject]);
    }

    const deleteItem = (id) => {
        const filteredArray = taskList.filter(obj => obj.id !== id)
        setTaskList(filteredArray);
    }

    const changeTask = (id, data, changeField) => {
        const index = taskList.findIndex((elem) => elem.id === id);
        const oldTask = taskList[index];
        const editedTask = {...oldTask, [changeField]: data};
        setTaskList([
            ...taskList.slice(0, index), 
            editedTask,
            ...taskList.slice(index + 1)
        ]);
    }
    
    const editItem = (id, data) => {
        changeTask(id, data, 'name')
    }

    const changeExecution = (id, data) => {
        changeTask(id, data, 'execution')
    }

    const filterTasks = (tasks, filt) => {
        if(filt === 'all'){
            return tasks
        }
        const filteredTasks = tasks.filter((obj) => obj.execution === filt)
        return filteredTasks;
    }

    const onFilterChange = (e) => {
        const newFilter = e.target.name;
        setFilter(newFilter);
      };

      const visibleItems = filterTasks(taskList, filter);
      console.log(visibleItems)

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>To-Do-List</h1>
            <section className={styles['todo-part']}>
                <article>
                    <ToDoForm sendDataToParent={addNewItem} setTaskList={setTaskList} />
                    <section className={styles.buttons}>
                        <button name='not done' onClick={onFilterChange}>Not done tasks</button>
                        <button name='in process' onClick={onFilterChange}>Tasks in process</button>
                        <button name='done' onClick={onFilterChange}>Done tasks</button>
                        <button name='all' onClick={onFilterChange}>All tasks</button>
                    </section>
                </article>
                <article className={styles.tasks}>
                    {taskList.length !== 0 ? 
                                            <ul>{visibleItems.map(elem => 
                                                <ToDoItem 
                                                    text={elem.name} 
                                                    key={elem.id} 
                                                    id={elem.id} 
                                                    execution={elem.execution} 
                                                    deleteCallback={deleteItem} 
                                                    editCallvack={editItem} 
                                                    executionCallback={changeExecution} />
                                                )}</ul> : 
                                                                                    <div className={styles.empty}>You don't have tasks yet</div>}
                </article>
            </section>
        </main>
    );
}

export default ToDoPage;
