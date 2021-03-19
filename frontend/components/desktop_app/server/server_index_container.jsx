import { connect } from "react-redux";
import * as serverActions from "../../../actions/server_actions";
import * as channelActions from "../../../actions/channel_actions";
import ServerIndex from "./server_index";

const mapStateToProps = (state) => ({
  servers: Object.values(state.entities.servers),
});

const mapDispatchToProps = (dispatch) => ({
  requestServers: () => dispatch(serverActions.requestServers()),
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestServerChannels: (serverId) =>
    dispatch(channelActions.requestServerChannels(serverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
