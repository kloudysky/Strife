import React from 'react';
import { Link, Redirect, Switch, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SignupFormContainer from '../session_form/login_form_container';
import LoginFormContainer from '../session_form/login_form_container';

const Splash = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
        </nav>
    );
    const loggedIn = () => (
        <nav>
            <h2>Hey, {currentUser.username}, click here to use the desktop app</h2>
            <Link to="/">Strife</Link>
        </nav>
    );

    return(
        <div>
            {currentUser ? loggedIn() : sessionLinks()}
        </div>
    ) 
};

export default Splash;