import React from 'react';

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            birthday: ''
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
                <h2 className='login-header'>Create an account</h2>
                 <div className='login-form-box'>
                <form onSubmit={this.handleSubmit} className='login-form form'>
                    {this.renderErrors()}
                        <div className="form-field">
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        </div>
                        <br/>
                        <div className="form-field">
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
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
                        <br/>
                        <div className="form-field">
                        <label>Date of Birth:
                            <input type="date"
                            max='2018-12-31'
                            value={this.state.birthday}
                            onChange={this.update('birthday')}
                            className="login-input"
                            />
                        </label>
                        </div>
                        <br/>
                        <div className="form-field">
                        <input type="submit" className='form-login-button' value='Contiue'/>
                        </div>
                </form>
                </div>
                <br/>
                {this.props.navLink}
            </div>
        )
    }
}

export default CreateUserForm;