import React from "react";
import { Link, Redirect } from "react-router-dom";

export class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: "",
      username: "",
      password: "",
      birthday: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }
  render() {
    if (this.state.redirect) {
      if (this.props.formType === "Log In") {
        return <Redirect push to="/signup" />;
      } else if (this.props.formType === "Sign Up") {
        return <Redirect push to="/login" />;
      }
    }
    return (
      <div className="mount">
        <div className="auth">
          <div className="bg-auth bg-wrapper sbg-2 sb-3">
            <div className="right-side"></div>
            <div className="left-side noembed">
              <a href="" className="logo-2eq logo-2 logo-auth auth-icon">
                STRIFE
              </a>
              <div className="auth-wrapper auth-wrapper-style">
                {this.props.formType === "Log In"
                  ? this.loginForm()
                  : this.signupForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  changeForm(e) {
    e.preventDefault();

    setTimeout(() => {
      this.setState({ redirect: true });
    }, 100);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demo1login() {
    const user = {
      email: "kloud@ff7.com",
      password: "123456",
    };
    this.props.processLoginForm(user);
  }

  demo2login() {
    const user = {
      email: "tifa@ff7.com",
      password: "123456",
    };
    this.props.processLoginForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  signupForm() {
    return (
      <div className="auth-box dark-theme">
        <div className="center-wrap">
          <div className="login-header">Create an account</div>
          <div className="signup-form">
            <div className="form-input">
              <h5 className="input-label">Email</h5>
              <div className="input-area input-display">
                <div className="input-wrap-d input-wrap-m">
                  <input className="input-def-email" type="text" name="email" />
                </div>
              </div>
            </div>
            <div className="form-input">
              <h5 className="input-label">Username</h5>
              <div className="input-area input-display">
                <div className="input-wrap-d input-wrap-m">
                  <input
                    className="input-def-email"
                    type="text"
                    name="username"
                  />
                </div>
              </div>
            </div>
            <div className="form-input">
              <h5 className="input-label">Password</h5>
              <div className="input-area input-display">
                <div className="input-wrap-d input-wrap-m">
                  <input
                    className="input-def-email"
                    type="password"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="date-selector-container">
              <h5 className="input-label">Date of birth</h5>
              <div className="date-input">
                <div tabIndex="1">
                  <div>
                    <div className="selector month-input">
                      <div className="date-container">
                        <div className="date-controller">
                          <div className="date-inner">
                            <div className="date-box-placeholder">Select</div>
                            <div className="date-input-area">
                              <div className="display-block">
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-2-input"
                                  spellCheck="false"
                                  tabIndex="0"
                                  type="text"
                                  aria-autocomplete="list"
                                  aria-label="Month"
                                  value=""
                                  className="date-input-style"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="date-box-arrow-container">
                            <div className="date-box-arrow">
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-19bqh2r"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="date-dropdown-menu"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div tabIndex="2"></div>
                <div tabIndex="3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  loginForm() {
    return (
      <div>
        <form action="" className="auth-box auth-box-big dark-theme">
          <div className="center-wrap">
            <div className="auth-container flex-10 center-align justify-start no-wrap direction-row horizontal-2 flex-1x horizontal-1 extra-style">
              <div className="login-container">
                <div className="login-header">Welcome back!</div>
                <div className="login-header-text">
                  We're so excited to see you again!
                </div>
                <div className="login-block">
                  <div className="form-input">
                    <h5 className="input-label">Email</h5>
                    <div className="input-area input-display">
                      <div className="input-wrap-d input-wrap-m">
                        <input
                          className="input-def-email"
                          type="text"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="password-input">
                    <h5 className="input-label">Password</h5>
                    <div className="input-wrap-d">
                      <input className="input-def-password" type="password" />
                    </div>
                  </div>
                  <button className="fgt-psw-btn">Forgot your password?</button>
                  <button className="session-btn">Login</button>
                  <div className="session-fm-btm">
                    <span className="needaccount">Need an account?</span>
                    <button onClick={this.changeForm} className="register-btn">
                      Register
                    </button>
                  </div>
                </div>
              </div>
              <div className="vert-br"></div>
              <div className="demo-login-container">
                <div className="demo-login-inner">
                  <div className="demo-login-btns">
                    <button className="session-btn">Demo User 1</button>
                    <button className="session-btn">Demo User 2</button>
                  </div>
                  <div className="demo-header">
                    Create an account or log in with Demo User
                  </div>
                  <div className="demo-text">
                    There are 2 demo users you can login with to test out live
                    chat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthComponent;
