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
  return {
    channels: Object.values(state.entities.channels),
    activeServer: activeServer,
    currentUser: state.entities.users.currentUser,
    messages: state.entities.messages,
    activeChannel: activeChannel,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestDMChannels: () => dispatch(channelActions.requestDMChannels()),
  requestMessages: (channelId) =>
    dispatch(messageActions.requestMessages(channelId)),
  setChannel: (channel) => dispatch(uiActions.setActiveChannel(channel)),
  logout: () => dispatch(sessionActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
