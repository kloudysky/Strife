import * as actions from "../actions/message_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_MESSAGE_ERRORS:
      return [];
    default:
      return state;
  }
};
