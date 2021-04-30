import { connect } from "react-redux";
import * as serverActions from "../../actions/server_actions";
import * as channelActions from "../../actions/channel_actions";
import * as uiActions from "../../actions/ui_actions";

import DesktopApp from "./desktop_app";

const mapStateToProps = (state) => {
  let activeServer;
  if (state.ui.activeServer) {
    activeServer = state.ui.activeServer;
  } else {
    activeServer = { id: -1 };
  }
  return {
    servers: Object.values(state.entities.servers),
    channels: Object.values(state.entities.channels),
    createServerModalState: state.ui.createServerModalState,
    deleteServerModalState: state.ui.deleteServerModalState,
    leaveServerModalState: state.ui.leaveServerModalState,
    editServerModalState: state.ui.editServerModalState,
    openProfile: state.ui.openProfile,
    activeServer,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp);
