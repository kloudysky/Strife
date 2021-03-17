import React from 'react';
import SplashContainer from './splash/splash_container'
import { Link, Redirect, Switch, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>     
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;