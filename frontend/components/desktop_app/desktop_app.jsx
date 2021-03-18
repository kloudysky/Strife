import React from "react";
import Server from "./server/server";

class DesktopApp extends React.Component {
  componentDidMount() {
    this.props.requestServers();
    this.props.requestDMChannels();
  }

  render() {
    return (
      <div className="desktop-app">
        {this.serverList()}
        {this.dmList()}
      </div>
    );
  }

  serverList() {
    const servers = this.props.servers;
    return (
      <div className="server-list-container">
        <h1>Server List</h1>
        <ul className="server-list">
          {servers.map((server) => (
            <li className="server-list-item" key={server.id}>
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

  dmList() {
    const channels = this.props.channels;
    return (
      <div className="channel-list-container">
        <h3>direct messages</h3>
        <ul className="channel-list">
          {channels.map((channel) => (
            <li className="channel-list-item" key={channel.id}>
              {channel.channel_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DesktopApp;
