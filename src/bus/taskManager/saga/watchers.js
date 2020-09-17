// Core
import { all, call } from 'redux-saga/effects';

//Workers
import {watchFetchTasks, watchCreateTask, watchUpdateTask, watchDeleteTask} from './watchers/index';

export function* watchTaskManager() {
    yield all([
        call(watchFetchTasks),
        call(watchCreateTask),
        call(watchUpdateTask),
        call(watchDeleteTask)
    ]);
}