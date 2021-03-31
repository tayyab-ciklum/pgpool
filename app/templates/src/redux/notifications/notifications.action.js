import ActionTypes from "../action-types";
const {
 ADD_NOTIFICATION
} = ActionTypes.NOTIFICATION_ACTIONS;
export const AddNotification = (notification) => ({
    type: ADD_NOTIFICATION,
    payload: notification
});