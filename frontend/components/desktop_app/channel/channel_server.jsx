import React from "react";
import { Collapse } from "react-collapse";
import ServerMenuContainer from "./menu/server_menu_container";

class ChannelServer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleServerList.bind(this);
    this.state = {
      showTextChannels: true,
    };
  }

  toggleServerList() {
    this.setState({
      showTextChannels: !this.state.showTextChannels,
    });
  }

  setActiveChannel(channel) {
    this.props.requestMessages(channel.id);
    this.props.setChannel(channel);
  }

  toggleServerMenu() {
    if (this.props.openServerMenu) {
      this.hideServerMenu();
    } else {
      this.props.setServerMenu(true);
    }
  }

  hideServerMenu() {
    let modal = document.getElementById("server-menu-modal");

    modal.classList.add("transition-out");
    setTimeout(() => {
      this.props.setServerMenu(false);
    }, 100);
  }

  serverMenu() {
    if (this.props.openServerMenu) {
      return <ServerMenuContainer />;
    } else {
      return null;
    }
  }

  render() {
    const channels = this.props.channels;
    const server = this.props.server;
    return (
      <>
        <div
          onClick={() => this.toggleServerMenu()}
          className="channel-list-header channel-list-header-server"
        >
          <h3>{server.server_name}</h3>
          <i className="fas fa-angle-down channel-list-header-btn"></i>
        </div>
        <div className="channels-container">
          {this.serverMenu()}
          <div
            className="server-channel-tab channel-tab"
            onClick={() => this.toggleServerList()}
          >
            <i className="fas fa-angle-down channel-collapse-down"></i>
            <p>TEXT CHANNELS</p>
          </div>

          <ul className="channel-list">
            <Collapse isOpened={this.state.showTextChannels}>
              {channels.map((channel) => (
                <li
                  className={`channel-list-item ${
                    this.props.activeChannel.id === channel.id
                      ? `active-channel`
                      : ``
                  }`}
                  key={channel.id}
                  onClick={() => this.setActiveChannel(channel)}
                >
                  <i className="fas fa-hashtag server-channel-icon"></i>
                  {channel.channel_name}
                </li>
              ))}
            </Collapse>
          </ul>
        </div>
      </>
    );
  }
}

export default ChannelServer;
