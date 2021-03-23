import { connect } from "react-redux";
import * as serverActions from "../../actions/server_actions";
import * as channelActions from "../../actions/channel_actions";
import * as uiActions from "../../actions/ui_actions";

import DesktopApp from "./desktop_app";

const mapStateToProps = (state) => ({
  servers: Object.values(state.entities.servers),
  channels: Object.values(state.entities.channels),
  createServerModalState: state.ui.createServerModalState,
});

const mapDispatchToProps = (dispatch) => ({
  requestServers: () => dispatch(serverActions.requestServers()),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestServerChannels: (serverId) =>
    dispatch(channelActions.requestServerChannels(serverId)),
  setCreateServerModalState: (createServerModalState) =>
    dispatch(uiActions.setCreateServerModalState(createServerModalState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp);
