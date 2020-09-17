// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api  } from "../../api";

export function* updateTask(params) {
    try {
        yield put(taskManagerActions.startUpdateTask(params.payload.id));

        const response = yield call(api.tasks.update, params.payload.id, params.payload.isCompleted);
        if (response.status !== 200) {
            throw new Error(response.status.toString());
        }

        yield delay(2000);
        yield put(taskManagerActions.fetchTasksAsync());
    } catch (ex) {
        yield put(taskManagerActions.updateWithError(ex.message));
    } finally {
        yield put(taskManagerActions.finishUpdateTask(params.payload.id));
    }
}
