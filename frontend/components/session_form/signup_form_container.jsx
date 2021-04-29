import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearSessionErrors, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">Already have an account?</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
