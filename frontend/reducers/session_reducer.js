import * as actions from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null,
});

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case actions.LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};
