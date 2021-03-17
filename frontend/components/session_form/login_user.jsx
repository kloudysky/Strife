export default () => {
  return (<div className='login-form-container'>
    <h2 className='login-header'>Welcome back!</h2>
    <p className='login-header'>We're so excited to see you again!</p>
    <div className='login-form-box'>
      <form onSubmit={this.handleSubmit} className='form-login form'>
        {this.renderErrors()}

        <br/>
        <div className="form-field">
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
          </label>
        </div>
        <br/>
        <div className="form-field">
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
          </label>
        </div>
        <div className="form-field">
          <a href="#">Forgot your password?</a>
        </div>
        <br/>
        <div className="form-field">
          <input type='submit' className='form-login-button' value='Login'/>
        </div>
      </form>
    </div>
    {this.props.navLink}
  </div>)
}