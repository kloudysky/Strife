import * as actions from "../actions/server_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_ALL_SERVERS:
      return action.servers;
    case actions.RECEIVE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server });
    case actions.DELETE_SERVER:
      return state.filter((server) => server.id !== action.serverId);
    default:
      return state;
  }
};
