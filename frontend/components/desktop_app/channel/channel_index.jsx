import React from "react";
import ChannelHome from "./channel_home";
import ChannelServer from "./channel_server";

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.requestDMChannels();
  }

  render() {
    const channels = this.props.channels;
    const server = this.props.activeServer;
    const user = this.props.currentUser;
    const requestMessages = this.props.requestMessages;
    const setChannel = this.props.setChannel;
    const activeChannel = this.props.activeChannel;
    const setServerMenu = this.props.setServerMenu;
    const openServerMenu = this.props.openServerMenu;

    return (
      <div className="channel-component">
        {server.id === -1 ? (
          <ChannelHome
            channels={channels}
            user={user}
            requestMessages={requestMessages}
            setChannel={setChannel}
            setDMChannel={this.props.setDMChannel}
            activeDMChannel={this.props.activeDMChannel}
            activeChannel={activeChannel}
          />
        ) : (
          <ChannelServer
            server={server}
            channels={channels}
            requestMessages={requestMessages}
            setChannel={setChannel}
            activeChannel={activeChannel}
            setServerMenu={setServerMenu}
            openServerMenu={openServerMenu}
          />
        )}
        <div className="settings-section">
          <div className="settings-avatar">
            <img className="settings-img" src={user.avatar} alt="" />
          </div>
          <p className="channel-profile-username">{user.username}</p>
          <div className="channel-settings-buttons">
            <button className="channel-setting-btn">
              <i className="fas fa-microphone-slash"></i>
            </button>
            <button className="channel-setting-btn">
              <i className="fas fa-headphones"></i>
            </button>
            <button
              className="logout-button channel-setting-btn"
              onClick={() => this.props.openUserSettings(true)}
            >
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
