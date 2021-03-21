import * as actions from "../actions/ui_actions";

const _nullServer = Object.freeze({
  activeServer: null,
});

export default (state = _nullServer, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.SET_ACTIVE_SERVER:
      return Object.assign({}, state, { activeServer: action.server });
    default:
      return state;
  }
};
