import React from 'react';
import login_user from './login_user'
import create_user from './create_user'
import {useLocation} from 'react-router-dom'

class SessionFormMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (<ul>
      {
        this.props.errors.map((error, i) => (<li key={`error-${i}`}>
          {error}
        </li>))
      }
    </ul>);
  }

  render() {
    const location = useLocation();
    return (
      <div>
        <p>{location}</p>
        <p>this.props.formType</p>
      </div>
      )
  }
}

export default SessionFormMod;
