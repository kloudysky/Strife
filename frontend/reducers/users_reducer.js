import * as actions from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    default:
      return state;
  }
};
