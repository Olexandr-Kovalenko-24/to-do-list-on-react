import React from 'react';
import { connect } from 'react-redux';
import ToDoForm from '../../components/to-do-form/ToDoForm';
import ToDoItem from '../../components/to-do-item/ToDoItem';
import styles from './ToDoPage.module.sass';
import { changeFilter, deleteTask, changeExecution, editTask } from '../../actions/actionCreators';

const ToDoPage = ({taskList, filter, changeFilter, editTask, deleteTask, changeExecution}) => {

    const deleteItem = (id) => {
        const filteredArray = taskList.filter(obj => obj.id !== id)
        deleteTask(filteredArray);
    }

    const changeTask = (id, data, changeField) => {
        const index = taskList.findIndex((elem) => elem.id === id);
        const oldTask = taskList[index];
        const editedTask = {...oldTask, [changeField]: data};
        const newArray = [
            ...taskList.slice(0, index), 
            editedTask,
            ...taskList.slice(index + 1)
        ];
        console.log(newArray)
        return newArray;
    }
    
    const editItem = (id, data) => {
        const newArray = changeTask(id, data, 'title')
        editTask(newArray)
    }

    const changeTaskExecution = (id, data) => {
        const newArray = changeTask(id, data, 'execution')
        changeExecution(newArray)
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
        changeFilter(newFilter);
      };

      const visibleItems = filterTasks(taskList, filter);

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>To-Do-List</h1>
            <section className={styles['todo-part']}>
                <article>
                    <ToDoForm />
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
                                                title={elem.title} 
                                                key={elem.id} 
                                                execution={elem.execution} 
                                                id={elem.id}
                                                deleteCallback={deleteItem}
                                                editCallvack={editItem} 
                                                executionCallback={changeTaskExecution} />
                                                )}</ul> : 
                                                                                        <div className={styles.empty}>You don't have tasks yet</div>}
                </article>
            </section>
        </main>
    );
}

const mapStateToProps = ({taskList, filter}) => ({taskList, filter})

const mapDispatchToProps = {
    changeFilter,
    changeExecution,
    deleteTask,
    editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
