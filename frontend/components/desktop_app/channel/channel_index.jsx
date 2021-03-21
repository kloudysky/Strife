import React from "react";
import Channel from "./channel";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.requestDMChannels();
  }

  render() {
    const channels = this.props.channels;
    const server = this.props.activeServer;
    return (
      <div className="channel-list-container">
        <h3>{server.id === -1 ? "Home" : `${server.server_name}`}</h3>
        <ul className="channel-list">
          {channels.map((channel) => (
            <li className="channel-list-item" key={channel.id}>
              {channel.channel_name}
            </li>
          ))}
        </ul>
        <div className="settings-section">
          <button className="logout-button" onClick={this.props.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
