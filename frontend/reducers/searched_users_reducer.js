import * as actions from "../actions/search_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};
