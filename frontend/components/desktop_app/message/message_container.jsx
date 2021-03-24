import { connect } from "react-redux";
import Message from "./message";

const mapStateToProps = (state) => ({
  messages: state.entities.messages,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
