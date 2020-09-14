// Types
import { types } from "./types";

const initialState = {
    fetching: false,
    errorCode: null,
    tasks: [],
}

export const taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_MANAGER_START_FETCHING_TASKS:
            return Object.assign({}, state, {
                fetching: true,
                errorCode: null
            })
        case types.TASK_MANAGER_FILL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case types.TASK_MANAGER_FETCH_WITH_ERROR:
            return Object.assign({}, state, {
                errorCode: action.payload.errorCode
            })
        case types.TASK_MANAGER_FINISH_FETCHING_TASKS:
            return Object.assign({}, state, {
                fetching: false
            })
        default:
            return state;
    }
}