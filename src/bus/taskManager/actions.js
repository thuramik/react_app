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

    // Async
    fetchTasksAsync: () => ({
        type: types.TASK_MANAGER_FETCH_TASKS_ASYNC,
    })
}