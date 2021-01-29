import { SagaAction } from '../utils/types';
import { ActionTypes } from './app.action';
const { USER_ACTIONS } = ActionTypes;
const INITIAL_STATE = {
    userId: null,
    currentUser: null,
    userStatus: true,
};
const { GET_CURRENT_USER, USER_REQUEST_SUCCESS, USER_REQUEST_FAILURE } = USER_ACTIONS;
const AppReducer = (state = INITIAL_STATE, action: SagaAction): unknown => {
    const { type, payload } = action;
    switch (type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                userId: payload,
            };
        case USER_REQUEST_SUCCESS:
            return {
                ...state,
                userStatus: true,
                currentUser: payload,
            };
        case USER_REQUEST_FAILURE:
            return {
                ...state,
                userStatus: false,
                currentUser: payload,
            };
        default:
            return state;
    }
};
export default (state: any, action: SagaAction): unknown => AppReducer(state, action);
