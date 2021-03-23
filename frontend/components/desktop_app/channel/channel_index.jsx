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
    const user = this.props.currentUser;
    return (
      <div className="channel-component">
        {server.id === -1 ? (
          <ChannelHome channels={channels} />
        ) : (
          <ChannelServer server={server} channels={channels} />
        )}
        <div className="settings-section">
          <div className="channel-profile-image">
            <img className="profile-img" src={user.avatar} alt="" />
          </div>
          <p className="channel-profile-username">{user.username}</p>
          <div className="channel-settings-buttons">
            <button className="channel-setting-btn">
              <i className="fas fa-microphone-slash"></i>
            </button>
            <button className="channel-setting-btn">
              <i class="fas fa-headphones"></i>
            </button>
            <button
              className="logout-button channel-setting-btn"
              onClick={this.props.logout}
            >
              <i class="fas fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
