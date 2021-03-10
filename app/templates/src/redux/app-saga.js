import NodesSaga from "./nodes/nodes.saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    ...NodesSaga,
  ]);
}
