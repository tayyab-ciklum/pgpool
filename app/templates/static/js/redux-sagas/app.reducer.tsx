import { SagaAction } from '../utils/types';
import { ActionTypes } from './app.action';
const { USER_ACTIONS, ADMIN_ACTIONS } = ActionTypes;
const INITIAL_STATE = {
    userId: null,
    currentUser: null,
    userStatus: true,
    requestError: false,
    requestSuccess: false,
    updatedConfig: null,
    clusters: []
};
const { GET_CURRENT_USER, USER_REQUEST_SUCCESS, USER_REQUEST_FAILURE } = USER_ACTIONS;
const { REQUEST_ERROR, SET_CLUSTERS, SET_CONFIG_SUCCESS, RESET_REQUEST_STATE, UPDATE_CLUSTER} = ADMIN_ACTIONS;
const AppReducer = (state = INITIAL_STATE, action: SagaAction): unknown => {
    const { type, payload } = action;
    switch (type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                requestError: false,
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
            case REQUEST_ERROR: {
                return {
                    ...state,
                    requestError: payload,
                    requestSuccess: false
                }
            };
            case SET_CLUSTERS: {
                return {
                    ...state,
                    requestError: false,
                    clusters: payload
                }
            };
            case SET_CONFIG_SUCCESS: {
                return {
                    ...state,
                    requestError: false,
                    requestSuccess: true,
                    clusters: [...state.clusters , payload ]
                }
            };
            case RESET_REQUEST_STATE: {
                return {
                    ...state,
                    requestError: false,
                    requestSuccess: false,
                }
            };
            case UPDATE_CLUSTER : {
                return {
                    ...state,
                    requestSuccess: true,
                    requestError: false,
                    updatedConfig: payload
                }
            }
        default:
            return state;
    }
};
export default (state: any, action: SagaAction): unknown => AppReducer(state, action);
