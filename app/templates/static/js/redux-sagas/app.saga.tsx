import { ActionTypes } from './app.action';
import * as adminApi from '../services/admin';
import * as userApi from '../services/user';
import * as actions from './app.action';
import { takeLatest, put, fork } from 'redux-saga/effects';
const { USER_ACTIONS, ADMIN_ACTIONS } = ActionTypes;
const { GET_CURRENT_USER } = USER_ACTIONS;
const { SET_CONFIG, GET_CLUSTERS, UPDATE_CONFIG} = ADMIN_ACTIONS;
type GetUserParams = { userId: string; type: string };
function* getUser({ userId }: GetUserParams) {
    try {
        const result = yield userApi.getUsers(userId);
        yield put(actions.getUserSuccess({ user: result.data }));
    } catch (error) {
        yield put(actions.getUserFailure({ user: error }));
    }
}
function* setConfig(data: any) {
    try {
        yield put(actions.resetRequestState());
        const result = yield adminApi.setConfig(data.config);
        yield put(actions.setConfigSuccess(result));
    } catch (error) {
        yield put(actions.requestError(error));
    }
}
function* getClusters() {
    try {
        yield put(actions.resetRequestState());
        const result = yield adminApi.getClusters();
        yield put(actions.setClusters(result));
    } catch (error) {
        yield put(actions.requestError(error));
    }
}
function* updateConfig(data: any) {
    try {
        yield put(actions.resetRequestState());
        const result = yield adminApi.updateConfig(data.config, data.id);
        yield put(actions.updateCluster(result));
    } catch (error) {
        yield put(actions.requestError(error));
    }
}
//saga watcher functions
function* watchGetUserRequest() {
    yield takeLatest(GET_CURRENT_USER, getUser);
}
function* watchSetConfigRequest() {
    yield takeLatest(SET_CONFIG, setConfig);
}
function* watchGetClusterRequest() {
    yield takeLatest(GET_CLUSTERS, getClusters);
}
function* watchUpdateConfigRequest() {
    yield takeLatest(UPDATE_CONFIG, updateConfig);
}
const appSagas = [fork(watchGetUserRequest), fork(watchSetConfigRequest), fork(watchGetClusterRequest), fork(watchUpdateConfigRequest)];
export default appSagas;
