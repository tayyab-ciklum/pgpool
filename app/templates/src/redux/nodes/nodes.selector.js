import { createSelector } from "reselect";

const appData = (state) => state.nodesReducer;

export const nodes = createSelector(
  [appData],
  (data) => data.nodes
);
