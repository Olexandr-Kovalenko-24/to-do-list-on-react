import React, {useState} from 'react';
import ToDoForm from '../../Components/ToDoForm/ToDoForm';
import ToDoItem from '../../Components/ToDoItem/ToDoItem';
import styles from './ToDoPage.module.sass';

const ToDoPage = () => {
    const [taskList, setTaskList] = useState([]);
    
    const mapList = () => {
        return taskList.map(elem => <ToDoItem text={elem.body} key={elem.id} id={elem.id} deleteCallback={deleteItem} />);
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

    return (
        <main className={styles.main}>
        <section className={styles.section}>
            <ToDoForm sendDataToParent={addNewItem} setTaskList={setTaskList} />
            <ul>
                {mapList()}
            </ul>
        </section>
        </main>
    );
}

export default ToDoPage;
