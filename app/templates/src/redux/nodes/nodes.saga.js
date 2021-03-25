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
    GET_NODES,
    ADD_NODE
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
  function* addNode(node) {
    yield put(actions.ResetRequest());
    try {
      yield put(actions.RequestInProgress());
      const result = yield call(api.addNode, node.payload);
      yield put(actions.AddNodeSuccess(result));
    } catch (e) {
      yield put(actions.RequestFailure());
    }
  }
  
  function* watchGetNodesRequest() {
    yield takeEvery(GET_NODES, getNodes);
  }
  function* watchAddNodeRequest() {
    yield takeEvery(ADD_NODE, addNode);
  }
  
  const nodesSaga = [
    fork(watchGetNodesRequest),
    fork(watchAddNodeRequest)
  ];
  
  export default nodesSaga;
  