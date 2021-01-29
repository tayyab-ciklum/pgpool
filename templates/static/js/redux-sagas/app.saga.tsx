import { ActionTypes } from './app.action';
import * as userApi from '../services/user';
import * as actions from './app.action';
import { takeLatest, put, fork } from 'redux-saga/effects';
const { USER_ACTIONS } = ActionTypes;
const { GET_CURRENT_USER } = USER_ACTIONS;
type GetUserParams = { userId: string; type: string };
function* getUser({ userId }: GetUserParams) {
    try {
        const result = yield userApi.getUsers(userId);
        yield put(actions.getUserSuccess({ user: result.data }));
    } catch (error) {
        yield put(actions.getUserFailure({ user: error }));
    }
}
//saga watcher functions
function* watchGetUserRequest() {
    yield takeLatest(GET_CURRENT_USER, getUser);
}
const appSagas = [fork(watchGetUserRequest)];
export default appSagas;
