import { connect } from "react-redux";
import * as actions from "../../actions/server_actions";
import DesktopApp from "./desktop_app";

const mapStateToProps = state => ({
    servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
    requestServers: () => dispatch(actions.requestServers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopApp)