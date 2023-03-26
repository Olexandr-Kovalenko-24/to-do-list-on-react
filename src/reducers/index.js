import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    taskList: [],
    filter: 'all'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK: {
            const { payload } = action;
            return {
                ...state,
                taskList: [...state.taskList, payload]
            }
        }
        case ACTION_TYPES.DELETE_ALL_TASKS: {
            return {
                ...state,
                taskList: []
            }
        }
        case ACTION_TYPES.DELETE_TASK: {
            const { payload } = action;
            return {
                ...state,
                taskList: [...payload]
            }
        }
        case ACTION_TYPES.EDIT_TASK: {
            const { payload } = action;
            return {
                ...state,
                taskList: [...payload]
            }
        }
        case ACTION_TYPES.CHANGE_EXECUTION: {
            const { payload } = action;
            return {
                ...state,
                taskList: [...payload]
            }
        }
        case ACTION_TYPES.CHANGE_FILTER: {
            const { payload } = action;
            return {
                ...state,
                filter: payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;