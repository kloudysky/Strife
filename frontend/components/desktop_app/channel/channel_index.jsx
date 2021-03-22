import React from "react";
import ChannelHome from "./channel_home";
import ChannelServer from "./channel_server";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.requestDMChannels();
  }

  render() {
    const channels = this.props.channels;
    const server = this.props.activeServer;
    return (
      <div className="channel-container">
        {server.id === -1 ? (
          <ChannelHome channels={channels} />
        ) : (
          <ChannelServer server={server} channels={channels} />
        )}
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
