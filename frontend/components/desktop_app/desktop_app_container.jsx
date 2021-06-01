import { connect } from "react-redux";
import * as serverActions from "../../actions/server_actions";
import * as channelActions from "../../actions/channel_actions";
import * as uiActions from "../../actions/ui_actions";
import * as sessionActions from "../../actions/session_actions";
import * as searchUserActions from "../../actions/search_actions";

import DesktopApp from "./desktop_app";

const mapStateToProps = (state) => {
  let activeServer;
  if (state.ui.activeServer) {
    activeServer = state.ui.activeServer;
  } else {
    activeServer = { id: -1 };
  }
  let activeDMChannel;
  if (state.ui.activeDMChannel) {
    activeDMChannel = state.ui.activeDMChannel;
  } else {
    activeDMChannel = { id: -1 };
  }
  let activeChannel;
  if (state.ui.activeChannel) {
    activeChannel = state.ui.activeChannel;
  } else {
    activeChannel = { id: -1 };
  }
  return {
    servers: Object.values(state.entities.servers),
    channels: Object.values(state.entities.channels),
    createServerModalState: state.ui.createServerModalState,
    createChannelModalState: state.ui.createChannelModalState,
    channelSettingsModalState: state.ui.openChannelSettings,
    deleteServerModalState: state.ui.deleteServerModalState,
    leaveServerModalState: state.ui.leaveServerModalState,
    editServerModalState: state.ui.editServerModalState,
    userSettingsModalState: state.ui.openUserSettings,
    inviteMemberModalState: state.ui.inviteMemberModalState,
    dmRequestModalState: state.ui.dmRequestModalState,
    currentUser: state.entities.users.currentUser,
    showChannelNotificationModalState: state.ui.showChannelNotification,
    serverErrors: state.errors.server,
    channelErrors: state.errors.channel,
    searchedUsers: state.entities.searchedUsers,
    activeServer,
    activeDMChannel,
    activeChannel,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestServers: () => dispatch(serverActions.requestServers()),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestServerChannels: (serverId) =>
    dispatch(channelActions.requestServerChannels(serverId)),
  setCreateServerModalState: (createServerModalState) =>
    dispatch(uiActions.setCreateServerModalState(createServerModalState)),
  setLeaveNotificationModalState: (modalState) =>
    dispatch(uiActions.leaveServer(modalState)),
  setEditServerModalState: (modalstate) =>
    dispatch(uiActions.editServer(modalstate)),
  setUserSettingsModalState: (modalstate) =>
    dispatch(uiActions.openUserSettings(modalstate)),
  setChannelSettingsModalState: (modalState) =>
    dispatch(uiActions.openChannelSettings(modalState)),
  setChannelNotificationModalState: (modalState) =>
    dispatch(uiActions.showChannelNotification(modalState)),
  deleteChannel: (channelId) =>
    dispatch(channelActions.removeChannel(channelId)),
  updateChannel: (channel) => dispatch(channelActions.updateChannel(channel)),
  deleteServer: (serverId) => dispatch(serverActions.removeServer(serverId)),
  leaveServer: (serverId) => dispatch(serverActions.leaveServer(serverId)),
  clearServerErrors: () => dispatch(serverActions.clearErrors()),
  updateServer: (server) => dispatch(serverActions.updateServer(server)),
  dispatchServerError: (errors) =>
    dispatch(serverActions.receiveErrors(errors)),
  dispatchChannelError: (errors) =>
    dispatch(channelActions.receiveErrors(errors)),
  clearChannelErrors: () => dispatch(channelActions.clearErrors()),
  setActiveChannel: (channel) => dispatch(uiActions.setActiveChannel(channel)),
  setActiveServer: (server) => dispatch(uiActions.setActiveServer(server)),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  setInviteMemberModalState: (modalState) =>
    dispatch(uiActions.inviteMember(modalState)),
  setDMRequestModalState: (modalState) =>
    dispatch(uiActions.DMRequest(modalState)),
  createChannel: (channel) => dispatch(channelActions.createChannel(channel)),
  searchUsers: (username) => dispatch(searchUserActions.requestUsers(username)),
  logout: () => dispatch(sessionActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp);
