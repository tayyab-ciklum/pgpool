export const ActionTypes = {
    USER_ACTIONS: {
        GET_CURRENT_USER: 'GET_CURRENT_USER',
        USER_REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
        USER_REQUEST_FAILURE: 'USER_REQUEST_FAILURE'
    },
    ADMIN_ACTIONS: {
        REQUEST_ERROR:'REQUEST_ERROR',
        SET_CONFIG:'SET_CONFIG',
        SET_CONFIG_SUCCESS: 'SET_CONFIG_SUCCESS',
        GET_CLUSTERS:'GET_CLUSTERS',
        SET_CLUSTERS:'SET_CLUSTERS',
        UPDATE_CONFIG:'UPDATE_CONFIG',
        RESET_REQUEST_STATE: 'RESET_REQUEST_STATE',
        UPDATE_CLUSTER:'UPDATE_CLUSTER'
    }
};
export const getUser = (userId: string): unknown => ({
    type: ActionTypes.USER_ACTIONS.GET_CURRENT_USER,
    userId,
});
export const getUserSuccess = (user: unknown) => ({
    type: ActionTypes.USER_ACTIONS.USER_REQUEST_SUCCESS,
    payload: { user },
});
export const getUserFailure = (user: unknown) => ({
    type: ActionTypes.USER_ACTIONS.USER_REQUEST_FAILURE,
    payload: { user },
});
export const setConfig = (config: unknown): unknown => ({
    type: ActionTypes.ADMIN_ACTIONS.SET_CONFIG,
    config
});
export const requestError = (error: string) => ({
    type: ActionTypes.ADMIN_ACTIONS.REQUEST_ERROR,
    payload: error
});
export const getClusters = () => ({
    type: ActionTypes.ADMIN_ACTIONS.GET_CLUSTERS
});
export const setClusters = (clusters: unknown) => ({
    type: ActionTypes.ADMIN_ACTIONS.SET_CLUSTERS,
    payload: clusters
});
export const updateConfig = (config: unknown, id: string): unknown => ({
    type: ActionTypes.ADMIN_ACTIONS.UPDATE_CONFIG,
    config, id
});
export const setConfigSuccess = (cluster: unknown) => ({
    type: ActionTypes.ADMIN_ACTIONS.SET_CONFIG_SUCCESS,
    payload: cluster
});
export const resetRequestState = () => ({
    type: ActionTypes.ADMIN_ACTIONS.RESET_REQUEST_STATE
});
export const updateCluster = (updatedConfig: unknown) => ({
    type: ActionTypes.ADMIN_ACTIONS.UPDATE_CLUSTER,
    payload: updatedConfig
})
