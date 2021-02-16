export declare const ActionTypes: {
    USER_ACTIONS: {
        GET_CURRENT_USER: string;
        USER_REQUEST_SUCCESS: string;
        USER_REQUEST_FAILURE: string;
    };
    ADMIN_ACTIONS: {
        REQUEST_ERROR: string;
        SET_CONFIG: string;
        SET_CONFIG_SUCCESS: string;
        GET_CLUSTERS: string;
        SET_CLUSTERS: string;
        UPDATE_CONFIG: string;
        RESET_REQUEST_STATE: string;
        UPDATE_CLUSTER: string;
    };
};
export declare const getUser: (userId: string) => unknown;
export declare const getUserSuccess: (user: unknown) => {
    type: string;
    payload: {
        user: unknown;
    };
};
export declare const getUserFailure: (user: unknown) => {
    type: string;
    payload: {
        user: unknown;
    };
};
export declare const setConfig: (config: unknown) => unknown;
export declare const requestError: (error: string) => {
    type: string;
    payload: string;
};
export declare const getClusters: () => {
    type: string;
};
export declare const setClusters: (clusters: unknown) => {
    type: string;
    payload: unknown;
};
export declare const updateConfig: (config: unknown, id: string) => unknown;
export declare const setConfigSuccess: (cluster: unknown) => {
    type: string;
    payload: unknown;
};
export declare const resetRequestState: () => {
    type: string;
};
export declare const updateCluster: (updatedConfig: unknown) => {
    type: string;
    payload: unknown;
};
