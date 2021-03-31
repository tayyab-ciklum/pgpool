import { combineReducers } from "redux";
import NodesReducer from "./nodes/nodes.reducer";
import NotificationReducer from "./notifications/notifications.reducer";

const AppReducers = combineReducers({
  nodesReducer: NodesReducer,
  notificationReducer: NotificationReducer
});

export default (state, action) => AppReducers(state, action);
