import React from "react";
import Server from "./server/server";

class DesktopApp extends React.Component {
  componentDidMount() {
    this.props.requestServers();
  }

  render() {
    return <div className="desktop-app">{this.serverContainer()}</div>;
  }

  serverContainer() {
    const servers = this.props.servers;
    return (
      <div className="server-container">
        <h1>Server List</h1>
        <ul className="server-list">
          {servers.map((server) => (
            <li className="server-item" key={server.id}>
              {server.server_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DesktopApp;
