import ACTION_TYPES from './actionTypes';

export const changeExecution = (payload) => ({
    type: ACTION_TYPES.CHANGE_EXECUTION,
    payload
})

export const editTask = (payload) => ({
    type: ACTION_TYPES.EDIT_TASK,
    payload
})

export const deleteTask = (payload) => ({
    type: ACTION_TYPES.DELETE_TASK,
    payload
})

export const deleteAllTask = (payload) => ({
    type: ACTION_TYPES.DELETE_ALL_TASKS,
    payload
})

export const changeFilter = (payload) => ({
    type: ACTION_TYPES.CHANGE_FILTER,
    payload
})

export const addTask = (payload) => ({
    type: ACTION_TYPES.ADD_TASK,
    payload
})