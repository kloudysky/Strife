import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
  }

  demo2login() {
    const user = {
      email: "tifa@ff7.com",
      password: "123456",
    };
    this.props.processForm(user);
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

  render() {
    return this.loginForm();
  }

  loginForm() {
    return (
      <div className="login-form-container">
        <div className="logo-link">
          <a href="/">STRIFE</a>
        </div>

        <div className="login-form-box fade-in">
          <div className="normal-login">
            <h2 className="login-header">Welcome back!</h2>
            <p className="login-header">We're so excited to see you again!</p>
            <div className="login-form-box">
              <form onSubmit={this.handleSubmit} className="form-login form">
                {this.renderErrors()}
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                  />
                </div>
                <br />
                <div className="form-field">
                  <label>Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </div>
                <div className="form-field">
                  <a href="#">Forgot your password?</a>
                </div>
                <br />
                <div className="form-field">
                  <button type="submit" className="form-login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <span>Need an account? {this.props.navLink}</span>
          </div>
          <div className="demo-login">
            <button
              className="demo-login-btn"
              onClick={() => this.demo1login()}
            >
              User 1 Demo Login
            </button>
            <button
              className="demo-login-btn"
              onClick={() => this.demo2login()}
            >
              User 2 Demo Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  signupForm() {
    return (
      <div className="login-form-container">
        <div className="logo-link">
          <h3>STRIFE</h3>
        </div>
        <div className="login-form-box">
          <h2 className="login-header">Create an account</h2>
          <div className="login-form-box">
            <form onSubmit={this.handleSubmit} className="login-form form">
              {this.renderErrors()}
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                />
              </div>
              <br />
              <div className="form-field">
                <label>Username</label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                />
              </div>
              <br />
              <div className="form-field">
                <label>Password</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </div>
              <br />
              <div className="form-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  max="2018-12-31"
                  value={this.state.birthday}
                  onChange={this.update("birthday")}
                  className="login-input"
                />
              </div>
              <br />
              <div className="form-field">
                <button type="submit" className="form-login-button">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <br />
          {this.props.navLink}
        </div>
      </div>
    );
  }
}

export default SessionForm;
