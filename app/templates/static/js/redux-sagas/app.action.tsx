export const ActionTypes = {
    USER_ACTIONS: {
        GET_CURRENT_USER: 'GET_CURRENT_USER',
        USER_REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
        USER_REQUEST_FAILURE: 'USER_REQUEST_FAILURE',
    },
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
