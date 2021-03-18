import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Server = props => (
    <li>
        {props.server.server_name}
    </li>
)

export default Server;