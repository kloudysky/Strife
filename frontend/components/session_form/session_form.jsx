import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
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
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-form-container'>
                <h2 className='login-header'>Welcome back!</h2>
                <p className='login-header'>We're so excited to see you again!</p>
                <div className='login-form-box'>
                <form onSubmit={this.handleSubmit} className='form-login form'>
                    {this.renderErrors()}
                        <div className="form-field">
                            <label>Email:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                        </div>
                        <br/>
                        <div className="form-field">
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
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
                <span>Need an account? {this.props.navLink}</span>
            </div>
        )
    }
}

export default SessionForm;