import { connect } from "react-redux";
import * as serverActions from "../../../../actions/server_actions";
import * as uiActions from "../../../../actions/ui_actions";
import ServerMenu from "./server_menu";

const mapStateToProps = (state) => {
  let activeServer;
  if (state.ui.activeServer) {
    activeServer = state.ui.activeServer;
  } else {
    activeServer = { id: -1 };
  }
  return {
    currentUser: state.entities.users.currentUser,
    modalState: state.ui.openServerMenu,
    errors: state.errors.server,
    currentUser: state.entities.users.currentUser,
    activeServer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createServer: (server) => dispatch(serverActions.createServer(server)),
  setServerMenu: (modalState) => dispatch(uiActions.openServerMenu(modalState)),
  leaveServerNotification: (modalState) =>
    dispatch(uiActions.leaveServer(modalState)),
  dispatchServerError: (errors) =>
    dispatch(serverActions.receiveErrors(errors)),
  clearErrors: () => dispatch(serverActions.clearErrors()),
  setEditServerModalState: (modalstate) =>
    dispatch(uiActions.editServer(modalstate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerMenu);
