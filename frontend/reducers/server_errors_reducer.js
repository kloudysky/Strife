import * as actions from "../actions/server_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_SERVER_ERRORS:
      return action.errors;
    case actions.RECEIVE_ALL_SERVERS:
      return [];
    case actions.RECEIVE_SERVER:
      return [];
    case actions.DELETE_SERVER:
      return [];
    case actions.CLEAR_SERVER_ERRORS:
      return [];
    default:
      return state;
  }
};
