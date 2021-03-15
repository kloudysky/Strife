import * as actions from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case actions.RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
