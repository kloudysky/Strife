import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
    console.log(currentUser);
    console.log(logout);
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
        </nav>
    );
    const loggedIn = () => (
        <nav>
            <h2>Hey, {currentUser.username}, click here to use the desktop app</h2>
            <Link to="/">Strife</Link>
            <br/>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? loggedIn() : sessionLinks()
};

export default Splash;