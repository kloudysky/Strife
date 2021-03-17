import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='login-button'>
            <Link to="/login">Login</Link>
        </nav>
    );
    const loggedIn = () => (
        <nav className='login-button'>
            <Link to="/">Strife</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return (
        <div>
            <span className="logo-span">STRIFE</span>
            {currentUser ? loggedIn() : sessionLinks()}
        </div>
    )
};

export default Splash;