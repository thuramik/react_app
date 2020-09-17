// Core
import { takeEvery } from 'redux-saga/effects';

//Types
import {types} from "../../types";

//Workers
import {deleteTask} from "../workers";

export function* watchDeleteTask() {
    yield takeEvery(types.TASK_MANAGER_DELETE_TASK_ASYNC, deleteTask)
}
