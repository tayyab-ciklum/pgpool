import {
    takeEvery,
    call,
    fork,
    put
  } from "redux-saga/effects";
  
  import * as api from "../../services/nodesService";
  import * as actions from "./nodes.action";
  import ActionTypes from "../action-types";
  const {
    GET_NODES
  } = ActionTypes.NODES_ACTIONS;
  
  function* getNodes() {
    yield put(actions.ResetRequest());
    try {
      const result = yield call(api.getNodes);
      yield put(actions.SetNodes(result));
    } catch (e) {
      yield put(actions.RequestFailure());
    }
  }
  
  function* watchGetNodesRequest() {
    yield takeEvery(GET_NODES, getNodes);
  }
  
  
  const usersSaga = [
    fork(watchGetNodesRequest)
  ];
  
  export default usersSaga;
  