import { connect } from "react-redux";
import * as serverActions from "../../../actions/server_actions";
import * as channelActions from "../../../actions/channel_actions";
import * as messageActions from "../../../actions/message_actions";
import * as uiActions from "../../../actions/ui_actions";
import ServerIndex from "./server_index";

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
  return {
    servers: Object.values(state.entities.servers),
    activeServer: activeServer,
    createServerModalState: state.ui.createServerModalState,
    activeDMChannel: activeDMChannel,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestServers: () => dispatch(serverActions.requestServers()),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestServerChannels: (serverId) =>
    dispatch(channelActions.requestServerChannels(serverId)),
  setActiveServer: (server) => dispatch(uiActions.setActiveServer(server)),
  setCreateServerModalState: (modalState) =>
    dispatch(uiActions.setCreateServerModalState(modalState)),
  setActiveChannel: (channel) => dispatch(uiActions.setActiveChannel(channel)),
  requestMessages: (channelId) =>
    dispatch(messageActions.requestMessages(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
