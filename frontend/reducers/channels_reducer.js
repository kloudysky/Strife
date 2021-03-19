import * as actions from "../actions/channel_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_ALL_CHANNELS:
      return action.channels;
    case actions.RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case actions.DELETE_CHANNEL:
      let nextState = Object.assign({}, state);
      delete nextState[action.channelId];
      return nextState;
    default:
      return state;
  }
};
