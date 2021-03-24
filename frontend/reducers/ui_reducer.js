import * as actions from "../actions/ui_actions";

const initialUIState = Object.freeze({
  activeServer: null,
  createServerModalState: false,
});

export default (state = initialUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.SET_ACTIVE_SERVER:
      return Object.assign({}, state, { activeServer: action.server });
    case actions.SET_CREATE_SERVER_MODAL_STATE:
      return Object.assign({}, state, {
        createServerModalState: action.modalState,
      });
    default:
      return state;
  }
};