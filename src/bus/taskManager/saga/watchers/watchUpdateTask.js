// Core
import { takeEvery } from 'redux-saga/effects';

//Types
import {types} from "../../types";

//Workers
import {updateTask} from "../workers";

export function* watchUpdateTask() {
    yield takeEvery(types.TASK_MANAGER_UPDATE_TASK_ASYNC, updateTask)
}
