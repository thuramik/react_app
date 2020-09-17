// Types
import { types } from "./types";

export const taskManagerActions = {
    // Sync
    startFetchingTasks: () => ({
        type: types.TASK_MANAGER_START_FETCHING_TASKS
    }),
    fillTasks: (tasks) => ({
        type: types.TASK_MANAGER_FILL_TASKS,
        payload: tasks
    }),
    fetchWithError: (errorCode) => ({
        type: types.TASK_MANAGER_FETCH_WITH_ERROR,
        payload: { errorCode }
    }),
    finishFetchingTasks: () => ({
        type: types.TASK_MANAGER_FINISH_FETCHING_TASKS
    }),

    startCreateTask: () => ({
        type: types.TASK_MANAGER_START_CREATING_TASK
    }),
    finishCreateTask: () => ({
        type: types.TASK_MANAGER_FINISH_CREATING_TASK,
    }),
    createWithError: (errorCode) => ({
        type: types.TASK_MANAGER_CREATE_WITH_ERROR,
        payload: { errorCode }
    }),

    startUpdateTask: (id) => ({
        type: types.TASK_MANAGER_START_UPDATING_TASK,
        payload: { id }
    }),
    finishUpdateTask: (id) => ({
        type: types.TASK_MANAGER_FINISH_UPDATING_TASK,
        payload: { id }
    }),
    updateWithError: (errorCode) => ({
        type: types.TASK_MANAGER_UPDATE_WITH_ERROR,
        payload: { errorCode }
    }),

    startDeleteTask: (id) => ({
        type: types.TASK_MANAGER_START_DELETING_TASK,
        payload: { id }
    }),
    finishDeleteTask: (id) => ({
        type: types.TASK_MANAGER_FINISH_DELETING_TASK,
        payload: { id }
    }),
    deleteWithError: (errorCode) => ({
        type: types.TASK_MANAGER_DELETE_WITH_ERROR,
        payload: { errorCode }
    }),

    // Async
    fetchTasksAsync: () => ({
        type: types.TASK_MANAGER_FETCH_TASKS_ASYNC,
    }),
    createTaskAsync: (title) => ({
        type: types.TASK_MANAGER_CREATE_TASK_ASYNC,
        payload: { title }
    }),
    updateTaskAsync: (id, isCompleted) => ({
        type: types.TASK_MANAGER_UPDATE_TASK_ASYNC,
        payload: { id, isCompleted }
    }),
    deleteTaskAsync: (id) => ({
        type: types.TASK_MANAGER_DELETE_TASK_ASYNC,
        payload: { id }
    })
}