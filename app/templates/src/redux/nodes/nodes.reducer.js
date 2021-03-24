import { ActionTypes } from "../action-types";
const { NODES_ACTIONS, REQUEST_ACTIONS } = ActionTypes;

const INITIAL_STATE = {
  nodes: null,
  success: false,
  failure: false,
  inprogressRequest: false
};

const { SET_NODES } = NODES_ACTIONS;
const { REQUEST_SUCCESS, REQUEST_FAILURE, RESET_REQUEST, REQUEST_INPROGRESS } = REQUEST_ACTIONS;
const NodesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NODES:
      return {
        ...state,
        nodes: payload,
        success: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        success: true
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        failure: true
      };
    case RESET_REQUEST:
        return {
          ...state,
          success: false,
          failure: false
        };
    case REQUEST_INPROGRESS:
          return {
            ...state,
            inprogressRequest: true
          };
    default:
      return state;
  }
};

export default NodesReducer;
