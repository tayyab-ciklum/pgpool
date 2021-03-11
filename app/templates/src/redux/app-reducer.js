import { combineReducers } from "redux";
import NodesReducer from "./nodes/nodes.reducer";

const AppReducers = combineReducers({
  nodesReducer: NodesReducer,
});

export default (state, action) => AppReducers(state, action);
