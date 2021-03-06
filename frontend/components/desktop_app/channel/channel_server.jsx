import React from "react";
import { Collapse } from "react-collapse";
import { Helmet } from "react-helmet";
import ServerMenuContainer from "./menu/server_menu_container";
import actionCable from "actioncable";

class ChannelServer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleServerList.bind(this);
    this.state = {
      showTextChannels: true,
      showChannelActions: false,
      hoverChannelId: -1,
    };
  }

  componentDidMount() {
    console.log("CHANNEL SERVER MOUNT");
  }

  toggleServerList() {
    this.setState({
      showTextChannels: !this.state.showTextChannels,
    });
  }

  setActiveChannel(channel) {
    this.setState({ hoverChannelId: -1 });
    if (this.props.CableApp.messages) {
      console.log("UUNSUB");
      this.props.CableApp.messages.unsubscribe();
    }
    this.props.requestMessages(channel.id);
    this.props.setChannel(channel);
    <Helmet>
      <title>{channel.channel_name}</title>
    </Helmet>;

    console.log("SUBSCRIBING");
    this.props.CableApp.messages = this.props.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: channel.id,
      },
      {
        connected: () => {},
        received: (message) => {
          this.getResponseMessage(message);
        },
        speak: function (message) {
          return this.perform("speak", message);
        },
      }
    );
    // console.log(this.CableApp.messages);
  }

  getResponseMessage(message) {
    console.log("RECEIVING MSG");
    const response = JSON.parse(message.json);
    if (this.props.currentUser.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
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

  showChannelActions(show, channelId) {
    if (this.props.activeChannel.id === channelId) {
      this.setState({ showChannelActions: false, hoverChannelId: -1 });
    } else {
      this.setState({ showChannelActions: show, hoverChannelId: channelId });
    }
  }

  ownerActions() {
    if (this.props.server.owner_id === this.props.currentUser.id) {
      return (
        <div className="channel-owner-actions">
          <i
            onClick={() => this.props.setInviteMemberModalState(true)}
            className="fas fa-user-plus server-channel-icon channel-owner-action-btn"
          ></i>
          <i
            onClick={() => this.props.openChannelSettings(true)}
            className="fas fa-cog server-channel-icon channel-owner-action-btn"
          ></i>
        </div>
      );
    }
  }

  render() {
    const { channels, server } = this.props;
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
          <div className="server-channel-tab channel-tab">
            <div
              className="server-channel-tab-heading"
              onClick={() => this.toggleServerList()}
            >
              <i className="fas fa-angle-down channel-collapse-down"></i>
              <p>TEXT CHANNELS</p>
            </div>
            <i
              className={`fas fa-plus fa-plus-channel ${
                this.props.server.owner_id == this.props.currentUser.id
                  ? ""
                  : "channel-member-plus"
              }`}
              onClick={() => this.props.setCreateChannelModalState(true)}
            ></i>
          </div>

          <ul className="channel-list">
            <Collapse isOpened={this.state.showTextChannels}>
              {channels.map((channel) => (
                <li
                  onMouseEnter={() => this.showChannelActions(true, channel.id)}
                  onMouseLeave={() => this.showChannelActions(false, -1)}
                  className={`channel-list-item ${
                    this.props.activeChannel.id === channel.id
                      ? `active-channel`
                      : ``
                  }`}
                  key={channel.id}
                  onClick={() => this.setActiveChannel(channel)}
                >
                  <div className="channel-list-title">
                    <i className="fas fa-hashtag server-channel-icon"></i>
                    {channel.channel_name}
                  </div>
                  {this.props.activeChannel.id === channel.id
                    ? this.ownerActions()
                    : null}
                  {this.state.showChannelActions &&
                  this.state.hoverChannelId === channel.id
                    ? this.ownerActions()
                    : null}
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
