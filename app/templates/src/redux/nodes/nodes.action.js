import ActionTypes from "../action-types";
const {
    GET_NODES,
    SET_NODES,
    ADD_NODE
} = ActionTypes.NODES_ACTIONS;
const {
RESET_REQUEST,
REQUEST_SUCCESS,
REQUEST_FAILURE,
REQUEST_INPROGRESS
} = ActionTypes.REQUEST_ACTIONS;

export const getNodes = () => ({
    type: GET_NODES
});
export const SetNodes = (nodes) => ({
    type: SET_NODES,
    payload: nodes
});
export const ResetRequest = () => ({
    type: RESET_REQUEST
});
export const RequestSuccess = () => ({
    type: REQUEST_SUCCESS
});
export const RequestFailure = () => ({
    type: REQUEST_FAILURE
});
export const AddNode = (node) => ({
    type: ADD_NODE,
    payload: node
});
export const RequestInProgress = () => ({
    type: REQUEST_INPROGRESS
});