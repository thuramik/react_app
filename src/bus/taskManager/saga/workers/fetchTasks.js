// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api  } from "../../api";

export function* fetchTasks() {
    try {
        yield put(taskManagerActions.startFetchingTasks());

        const response = yield call(api.tasks.getAll);
        const tasks = yield call([response, response.json]);
        if (response.status !== 200) {
            throw new Error(response.status.toString());
        }

        yield delay(2000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (ex) {
        console.log(ex);
        yield put(taskManagerActions.fetchWithError(ex.message));
    } finally {
        yield put(taskManagerActions.finishFetchingTasks());
    }
}
