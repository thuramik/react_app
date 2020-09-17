// Core
import { takeEvery } from 'redux-saga/effects';

//Types
import {types} from "../../types";

//Workers
import {fetchTasks} from "../workers";

export function* watchFetchTasks() {
    yield takeEvery(types.TASK_MANAGER_FETCH_TASKS_ASYNC, fetchTasks)
}
