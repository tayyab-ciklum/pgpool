import { createSelector } from "reselect";

const appData = (state) => state.nodesReducer;

export const nodes = createSelector(
  [appData],
  (data) => data.nodes
);
export const nodeInProgress = createSelector(
  [appData],
  (data) => data.inprogressRequest
);
export const success = createSelector(
  [appData],
  (data) => data.success
);
export const error = createSelector(
  [appData],
  (data) => data.failure
);