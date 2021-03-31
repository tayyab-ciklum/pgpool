import { createSelector } from "reselect";

const appData = (state) => state.notificationReducer;

export const notificationsData = createSelector(
  [appData],
  (data) => data.notifications
);
export const notificationsCounter = createSelector(
    [appData],
    (data) => data.notificationCounter
  );