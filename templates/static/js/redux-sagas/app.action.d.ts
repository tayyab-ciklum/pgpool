export declare const ActionTypes: {
    USER_ACTIONS: {
        GET_CURRENT_USER: string;
        USER_REQUEST_SUCCESS: string;
        USER_REQUEST_FAILURE: string;
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
