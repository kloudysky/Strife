import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearSessionErrors, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log In",
    navLink: <Link to="/signup">Register</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
