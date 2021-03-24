import * as actions from "../actions/message_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_CHANNEL_MESSAGES:
      return action.messages;
    case actions.RECEIVE_CHANNEL_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};
