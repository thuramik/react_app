// Types
import { types } from "./types";

const initialState = {
    creating: false,
    fetching: false,
    errorCode: null,
    tasks: [],
    actionOnTaskIds: new Set()
}

export const taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        // FETCH
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

        // CREATE
        case types.TASK_MANAGER_START_CREATING_TASK:
            return Object.assign({}, state, {
                creating: true,
                errorCode: null
            })
        case types.TASK_MANAGER_CREATE_WITH_ERROR:
            return Object.assign({}, state, {
                errorCode: action.payload.errorCode
            })
        case types.TASK_MANAGER_FINISH_CREATING_TASK:
            return Object.assign({}, state, {
                creating: false
            })

        // UPDATE
        case types.TASK_MANAGER_START_UPDATING_TASK:
            return Object.assign({}, state, {
                actionOnTaskIds: new Set(state.actionOnTaskIds).add(action.payload.id)
            })
        case types.TASK_MANAGER_UPDATE_WITH_ERROR:
            return Object.assign({}, state, {
                errorCode: action.payload.errorCode
            })
        case types.TASK_MANAGER_FINISH_UPDATING_TASK:
            let newActionOnTaskIdsAfterUpdate = new Set(state.actionOnTaskIds);
            newActionOnTaskIdsAfterUpdate.delete(action.payload.id);
            return Object.assign({}, state, {
                actionOnTaskIds: newActionOnTaskIdsAfterUpdate
            })

        // DELETE
        case types.TASK_MANAGER_START_DELETING_TASK:
            return Object.assign({}, state, {
                actionOnTaskIds: new Set(state.actionOnTaskIds).add(action.payload.id)
            })
        case types.TASK_MANAGER_DELETE_WITH_ERROR:
            return Object.assign({}, state, {
                errorCode: action.payload.errorCode
            })
        case types.TASK_MANAGER_FINISH_DELETING_TASK:
            let newActionOnTaskIdsAfterDelete = new Set(state.actionOnTaskIds);
            newActionOnTaskIdsAfterDelete.delete(action.payload.id);
            return Object.assign({}, state, {
                actionOnTaskIds: newActionOnTaskIdsAfterDelete
            })

        default:
            return state;
    }
}