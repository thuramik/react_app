// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api  } from "../../api";

export function* createTask(params) {
    try {
        yield put(taskManagerActions.startCreateTask());

        const response = yield call(api.tasks.create, params.payload.title);
        if (response.status !== 201) {
            throw new Error(response.status.toString());
        }

        yield delay(2000);
        yield put(taskManagerActions.fetchTasksAsync());
    } catch (ex) {
        yield put(taskManagerActions.createWithError(ex.message));
    } finally {
        yield put(taskManagerActions.finishCreateTask());
    }
}
