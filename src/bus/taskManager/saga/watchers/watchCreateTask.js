// Core
import { takeEvery } from 'redux-saga/effects';

//Types
import {types} from "../../types";

//Workers
import {createTask} from "../workers";

export function* watchCreateTask() {
    yield takeEvery(types.TASK_MANAGER_CREATE_TASK_ASYNC, createTask)
}
