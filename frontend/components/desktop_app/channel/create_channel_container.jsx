import { connect } from "react-redux";
import * as channelActions from "../../../actions/channel_actions";
import * as uiActions from "../../../actions/ui_actions";
import CreateChannel from "./create_channel";

const mapStateToProps = (state) => {
  let activeServer;
  if (state.ui.activeServer) {
    activeServer = state.ui.activeServer;
  } else {
    activeServer = { id: -1 };
  }
  return {
    currentUser: state.entities.users.currentUser,
    modalState: state.ui.createChannelModalState,
    errors: state.errors.channel,
    activeServer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel) => dispatch(channelActions.createChhannel(channel)),
  setCreateChannelModalState: (modalState) =>
    dispatch(uiActions.setCreateChannelModalState(modalState)),
  dispatchChannelError: (errors) =>
    dispatch(channelActions.receiveErrors(errors)),
  clearErrors: () => dispatch(channelActions.clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);
