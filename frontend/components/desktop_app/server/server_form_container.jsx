import { connect } from "react-redux";
import * as serverActions from "../../../actions/server_actions";
import * as uiActions from "../../../actions/ui_actions";
import CreateServer from "./create_server";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users.currentUser,
  modalState: state.ui.createServerModalState,
  errors: state.errors.server,
});

const mapDispatchToProps = (dispatch) => ({
  createServer: (server) => dispatch(serverActions.createServer(server)),
  setCreateServerModalState: (modalState) =>
    dispatch(uiActions.setCreateServerModalState(modalState)),
  dispatchServerError: (errors) =>
    dispatch(serverActions.receiveErrors(errors)),
  clearErrors: () => dispatch(serverActions.clearErrors()),
  joinServer: (inviteCode) => dispatch(serverActions.joinServer(inviteCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);
