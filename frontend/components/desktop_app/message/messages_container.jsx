import { connect } from "react-redux";
import MessageComponent from "./message_component";
import * as messageActions from "../../../actions/message_actions";

const mapStateToProps = (state) => ({
  messages: state.entities.messages,
  activeChannel: state.ui.activeChannel,
  currentUser: state.entities.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(messageActions.createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
