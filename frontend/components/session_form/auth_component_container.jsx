import React from "react";
import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form_two";
import AuthComponent from "./auth_component";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processSignupForm: (user) => dispatch(signup(user)),
    processLoginForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
