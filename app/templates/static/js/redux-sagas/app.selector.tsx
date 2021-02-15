import { createSelector } from "reselect";

const adminState = (state: any) => state;

export const selectClusters = createSelector(
  [adminState],
  (adminStateData: any) => adminStateData.clusters
);
export const selectError = createSelector(
  [adminState],
  (adminStateData: any) => adminStateData.requestError
);
export const selectSuccess = createSelector(
  [adminState],
  (adminStateData: any) => adminStateData.requestSuccess
);