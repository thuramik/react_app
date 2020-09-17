// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api  } from "../../api";

export function* deleteTask(params) {
    try {
        yield put(taskManagerActions.startDeleteTask(params.payload.id));

        const response = yield call(api.tasks.delete, params.payload.id);
        if (response.status !== 200) {
            throw new Error(response.status.toString());
        }

        yield delay(2000);
        yield put(taskManagerActions.fetchTasksAsync());
    } catch (ex) {
        yield put(taskManagerActions.deleteWithError(ex.message));
    } finally {
        yield put(taskManagerActions.finishDeleteTask(params.payload.id));
    }
}
