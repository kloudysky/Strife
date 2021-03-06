import { connect } from "react-redux";
import * as channelActions from "../../../actions/channel_actions";
import * as uiActions from "../../../actions/ui_actions";
import * as sessionActions from "../../../actions/session_actions";
import * as messageActions from "../../../actions/message_actions";
import ChannelIndex from "./channel_index";

const mapStateToProps = (state) => {
  let activeServer;
  if (state.ui.activeServer) {
    activeServer = state.ui.activeServer;
  } else {
    activeServer = { id: -1 };
  }
  let activeChannel;
  if (state.ui.activeChannel) {
    activeChannel = state.ui.activeChannel;
  } else {
    activeChannel = { id: -1 };
  }
  let activeDMChannel;
  if (state.ui.activeDMChannel) {
    activeDMChannel = state.ui.activeDMChannel;
  } else {
    activeDMChannel = { id: -1 };
  }
  return {
    channels: Object.values(state.entities.channels),
    activeServer,
    currentUser: state.entities.users.currentUser,
    messages: state.entities.messages,
    activeChannel,
    activeDMChannel,
    openServerMenu: state.ui.openServerMenu,
    currentUser: state.entities.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  removeDMChannel: (channelId) =>
    dispatch(channelActions.removeChannel(channelId)),
  requestMessages: (channelId) =>
    dispatch(messageActions.requestMessages(channelId)),
  setChannel: (channel) => dispatch(uiActions.setActiveChannel(channel)),
  setDMChannel: (channel) => dispatch(uiActions.setActiveDMChannel(channel)),
  setServerMenu: (modalState) => dispatch(uiActions.openServerMenu(modalState)),
  openUserSettings: (modalState) =>
    dispatch(uiActions.openUserSettings(modalState)),
  openChannelSettings: (modalState) =>
    dispatch(uiActions.openChannelSettings(modalState)),
  setCreateChannelModalState: (modalstate) =>
    dispatch(uiActions.setCreateChannelModalState(modalstate)),
  setInviteMemberModalState: (modalState) =>
    dispatch(uiActions.inviteMember(modalState)),
  setDMRequestModalState: (modalState) =>
    dispatch(uiActions.DMRequest(modalState)),
  receiveMessage: (message) => dispatch(messageActions.receiveMessage(message)),
  logout: () => dispatch(sessionActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
