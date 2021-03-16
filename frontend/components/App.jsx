import React from 'react';
import Splash from './splash/splash'
import { Link, Redirect, Switch, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
        <h1>Strife</h1>
        </header>

        <Route exact path="/" component={Splash} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        
    </div>
);

export default App;