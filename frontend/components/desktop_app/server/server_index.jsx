import React from "react";
import Server from "./server";
import { Link } from "react-router-dom";

class ServerIndex extends React.Component {
  componentDidMount() {
    this.props.requestServers();
  }

  render() {
    const servers = this.props.servers;
    return (
      <div>
        <h1>Server List</h1>
        <ul className="server-list">
          <li onClick={() => this.props.requestDMChannels()}>DM's</li>
          {servers.map((server) => (
            <li
              className="server-list-item"
              key={server.id}
              onClick={() => this.props.requestServerChannels(server.id)}
            >
              {server.server_name}
            </li>
          ))}
        </ul>
        <br />
        <button className="logout-button" onClick={this.props.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default ServerIndex;
