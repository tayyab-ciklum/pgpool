import { ActionTypes } from "../action-types";
const { NODES_ACTIONS, REQUEST_ACTIONS } = ActionTypes;

const INITIAL_STATE = {
  nodes: [],
  success: false,
  failure: false,
  inprogressRequest: false
};

const { SET_NODES, ADD_NODE_SUCCESS, ADD_NODE_FAILURE } = NODES_ACTIONS;
const { REQUEST_SUCCESS, REQUEST_FAILURE, RESET_REQUEST, REQUEST_INPROGRESS } = REQUEST_ACTIONS;
const NodesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NODES:
      return {
        ...state,
        nodes: payload
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        success: true,
        inprogressRequest: false
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        failure: true,
        inprogressRequest: false
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
   case ADD_NODE_SUCCESS:
            return {
              ...state,
              inprogressRequest: false,
              nodes: [payload, ...state.nodes],
              success: true
            };
   case ADD_NODE_FAILURE:
              return {
                ...state,
                inprogressRequest: false,
                failure: true
              };
    default:
      return state;
  }
};

export default NodesReducer;
