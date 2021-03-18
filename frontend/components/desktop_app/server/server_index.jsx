import React from 'react';
import Server from './server'
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    componentDidMount() {
        this.props.requestServers();
    }

    render() {
        const servers = this.props.servers;
        return (
        <div>
            <ul>
                {
                    servers.map(server => (
                        <Server 
                            server={server}
                            key={server.id}
                        />
                    ))
                }
            </ul>
        </div>
        )
    }
}

export default ServerIndex;