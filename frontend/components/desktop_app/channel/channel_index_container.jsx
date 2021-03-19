import { connect } from "react-redux";
import * as actions from "../../../actions/channel_actions";
import ChannelIndex from "./channel_index";

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels),
});

const mapDispatchToProps = (dispatch) => ({
  requestDMChannels: () => dispatch(actions.requestDMChannels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
