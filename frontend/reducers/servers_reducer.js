import * as actions from "../actions/server_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_ALL_SERVERS:
      return Object.assign({}, state, action.servers);
    case actions.RECEIVE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server });
    case actions.DELETE_SERVER:
      let nextState = Object.assign({}, state);
      delete nextState[action.serverId];
      return nextState;
    default:
      return state;
  }
};
