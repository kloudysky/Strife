import React from "react";

class CreateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      birthday: "",
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
    return (
      <div className="login-form-container">
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

export default CreateUserForm;
