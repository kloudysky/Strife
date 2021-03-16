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
            <div className='signup-form-container'>
                <h2>Create an account</h2>
                <form onSubmit={this.handleSubmit} className='signup-form-box'>
                    {this.renderErrors()}
                    <div className='signup-form'>
                        <br/>
                        <label>Email:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        </label>
                        <br/>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>
                        <br/>
                        <label>Date of Birth:
                            <input type="text"
                            value={this.state.birthday}
                            onChange={this.update('birthday')}
                            className="signup-input"
                            />
                        </label>
                    </div>
                </form>
                <br/>
                {this.props.navLink}
            </div>
        )
    }
}

export default CreateUserForm;