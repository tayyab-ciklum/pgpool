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