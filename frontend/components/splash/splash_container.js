import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Splash from "./splash_container";

const mapStateToProps = ({ session, entities: { user } }) => {
  return {
    currentUser: users[sesson.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapstateToProps, mapDispatchToProps)(Splash);
