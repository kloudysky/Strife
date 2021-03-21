import { connect } from "react-redux";
import * as channelActions from "../../../actions/channel_actions";
import ChannelIndex from "./channel_index";
import * as serverActions from "../../../actions/server_actions";
import * as sessionActions from "../../../actions/session_actions";

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels),
});

const mapDispatchToProps = (dispatch) => ({
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  logout: () => dispatch(sessionActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
