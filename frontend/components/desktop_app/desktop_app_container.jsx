import { connect } from "react-redux";
import * as serverActions from "../../actions/server_actions";
import * as channelActions from "../../actions/channel_actions";
import * as uiActions from "../../actions/ui_actions";
import * as sessionActions from "../../actions/session_actions";

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
    currentUser: state.entities.users.currentUser,
    showChannelNotificationModalState: state.ui.showChannelNotification,
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
  deleteServer: (serverId) => dispatch(serverActions.removeServer(serverId)),
  leaveServer: (serverId) => dispatch(serverActions.leaveServer(serverId)),
  setActiveChannel: (channel) => dispatch(uiActions.setActiveChannel(channel)),
  setActiveServer: (server) => dispatch(uiActions.setActiveServer(server)),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  logout: () => dispatch(sessionActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp);
