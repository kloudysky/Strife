import React from "react";
import ChannelHome from "./channel_home";
import ChannelServer from "./channel_server";

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.requestDMChannels();
  }

  render() {
    const {
      channels,
      activeServer,
      requestMessages,
      setChannel,
      activeChannel,
      setServerMenu,
      openServerMenu,
      currentUser,
      setDMChannel,
      activeDMChannel,
      setCreateChannelModalState,
      openChannelSettings,
    } = this.props;

    return (
      <div className="channel-component">
        {activeServer.id === -1 ? (
          <ChannelHome
            channels={channels}
            user={currentUser}
            requestMessages={requestMessages}
            setChannel={setChannel}
            setDMChannel={setDMChannel}
            activeDMChannel={activeDMChannel}
            activeChannel={activeChannel}
          />
        ) : (
          <ChannelServer
            server={activeServer}
            channels={channels}
            requestMessages={requestMessages}
            setChannel={setChannel}
            activeChannel={activeChannel}
            setServerMenu={setServerMenu}
            openServerMenu={openServerMenu}
            currentUser={currentUser}
            setCreateChannelModalState={setCreateChannelModalState}
            openChannelSettings={openChannelSettings}
          />
        )}
        <div className="settings-section">
          <div className="settings-avatar">
            <img className="settings-img" src={currentUser.avatar} alt="" />
          </div>
          <p className="channel-profile-username">{currentUser.username}</p>
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
