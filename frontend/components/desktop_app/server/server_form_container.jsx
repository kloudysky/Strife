import { connect } from "react-redux";
import * as serverActions from "../../../actions/server_actions";
import * as uiActions from "../../../actions/ui_actions";
import ServerForm from "./server_form";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users.currentUser,
  modalState: state.ui.createServerModalState,
});

const mapDispatchToProps = (dispatch) => ({
  createServer: () => dispatch(serverActions.createServer(server)),
  setCreateServerModalState: (modalState) =>
    dispatch(uiActions.setCreateServerModalState(modalState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
