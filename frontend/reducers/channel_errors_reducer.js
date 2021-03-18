import * as actions from "../actions/channel_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case actions.RECEIVE_ALL_CHANNELS:
      return [];
    case actions.RECEIVE_CHANNEL:
      return [];
    case actions.DELETE_CHANNEL:
      return [];
    default:
      return state;
  }
};
