import { connect } from "react-redux";
import * as serverActions from "../../actions/server_actions";
import * as channelActions from "../../actions/channel_actions";

import DesktopApp from "./desktop_app";

const mapStateToProps = (state) => ({
  servers: Object.values(state.entities.servers),
  channels: Object.values(state.entities.channels),
});

const mapDispatchToProps = (dispatch) => ({
  requestServers: () => dispatch(serverActions.requestServers()),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestServerChannels: (serverId) =>
    dispatch(channelActions.requestServerChannels(serverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp);
