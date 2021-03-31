import { ActionTypes } from "../action-types";
const { NOTIFICATION_ACTIONS } = ActionTypes;
const INITIAL_STATE = {
    notifications: [],
    notificationCounter: 0
  };
  const { ADD_NOTIFICATION } = NOTIFICATION_ACTIONS;
  const NotificationReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_NOTIFICATION:
          return {
            ...state,
            notificationCounter: state.notificationCounter + 1,
            notifications: [payload, ...state.notifications]
          };
          default:
              return state;
        }
  }
export default NotificationReducer;