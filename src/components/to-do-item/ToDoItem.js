import React from 'react';
import cx from 'classnames';
import styles from './ToDoItem.module.sass'
import EdiText from 'react-editext'
import {} from '../../actions/actionCreators';

const ToDoItem = ({deleteCallback, 
                    editCallvack,
                    executionCallback,
                    title, 
                    execution,
                    id}) => {

    const deleteItem = () => {
        deleteCallback(id);
    }

    const editItem = (value) => {
        editCallvack(id, value);
    }

    const changeExecution = (event) => {
        executionCallback(id, event.target.value);
    }

    const cnames = cx({
        [styles.process]: execution === "in process",
        [styles.done]: execution === "done"
    });
    
    return (
        <li>
            <article className={styles.task}>
                <EdiText
                    className={cnames}
                    type='text'
                    value={title}
                    onSave={editItem}
                />
                <button onClick={deleteItem} className={styles.delete}></button>
                <select id="execution" onChange={changeExecution} className={styles.execution} >
                  <option value={execution}>{execution.toLowerCase()}</option>
                  <option value="not done">not done</option>
                  <option value="in process">in process</option>
                  <option value="done">done task</option>
               </select>
            </article>
        </li>
    );
}

export default ToDoItem;
