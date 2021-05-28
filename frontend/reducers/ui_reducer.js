import * as actions from "../actions/ui_actions";

const initialUIState = Object.freeze({
  activeServer: null,
  activeChannel: { id: -1 },
  activeDMChannel: { id: -1 },
  createServerModalState: false,
  openServerMenu: false,
  deleteServerModalState: false,
  leaveServerModalState: false,
  editServerModalState: false,
  inviteMemberModalState: false,
  dmRequestModalState: false,
  openUserSettings: false,
  createChannelModalState: false,
  openChannelSettings: false,
  showChannelNotification: false,
});

export default (state = initialUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.CREATE_CHANNEL_MODAL_STATE:
      return Object.assign({}, state, {
        createChannelModalState: action.modalState,
      });
    case actions.OPEN_USER_SETTINGS:
      return Object.assign({}, state, { openUserSettings: action.modalState });
    case actions.OPEN_CHANNEL_SETTINGS:
      return Object.assign({}, state, {
        openChannelSettings: action.modalState,
      });
    case actions.SHOW_CHANNEL_NOTIFICATION:
      return Object.assign({}, state, {
        showChannelNotification: action.modalState,
      });
    case actions.SET_ACTIVE_SERVER:
      return Object.assign({}, state, { activeServer: action.server });
    case actions.SET_CREATE_SERVER_MODAL_STATE:
      return Object.assign({}, state, {
        createServerModalState: action.modalState,
      });
    case actions.OPEN_SERVER_MENU:
      return Object.assign({}, state, {
        openServerMenu: action.modalState,
      });
    case actions.DELETE_SERVER:
      return Object.assign({}, state, {
        deleteServerModalState: action.modalState,
      });
    case actions.LEAVE_SERVER:
      return Object.assign({}, state, {
        leaveServerModalState: action.modalState,
      });
    case actions.INVITE_MEMBER:
      return Object.assign({}, state, {
        inviteMemberModalState: action.modalState,
      });
    case actions.DM_REQUEST:
      return Object.assign({}, state, {
        dmRequestModalState: action.modalState,
      });
    case actions.EDIT_SERVER:
      return Object.assign({}, state, {
        editServerModalState: action.modalState,
      });
    case actions.SET_ACTIVE_CHANNEL:
      return Object.assign({}, state, { activeChannel: action.channel });
    case actions.SET_ACTIVE_DM_CHANNEL:
      return Object.assign({}, state, { activeDMChannel: action.channel });
    default:
      return state;
  }
};
