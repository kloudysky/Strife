import React from "react";
import { Helmet } from "react-helmet";
import actionCable from "actioncable";
class ChannelHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChannelActions: false,
      hoverChannelId: -1,
    };

    // this.CableApp = {};
    // this.CableApp.cable = actionCable.createConsumer(
    //   // "wss://strifeapp.herokuapp.com/cable"
    //   "ws://localhost:3000/cable"
    // );
  }
  componentDidMount() {
    //this.props.requestMessages(this.props.activeChannel.id);
    this.props.activeDMChannel.id > 0
      ? this.props.requestMessages(this.props.activeDMChannel.id)
      : console.log("STRIFE APP");
  }

  setHomeChannel() {
    this.props.setChannel({ id: -1 });
    this.props.setDMChannel({ id: -1 });
    this.props.CableApp.messages.unsubscribe();
  }

  setActiveChannel(channel) {
    if (this.props.CableApp.messages) {
      this.props.CableApp.messages.unsubscribe();
    }
    this.props.requestMessages(channel.id);
    this.props.setChannel(channel);
    this.props.setDMChannel(channel);
    <Helmet>
      <title>channel.channel_name</title>
    </Helmet>;
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
    const response = JSON.parse(message.json);
    if (this.props.user.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
  }

  generateChannelImg(channel) {
    let imgUrl;
    if (channel.members.length === 2) {
      channel.members.forEach((member) => {
        if (member.id !== this.props.user.id) {
          imgUrl = member.avatar;
        }
      });
    } else {
      imgUrl =
        "https://cdn1.iconfinder.com/data/icons/ui-colored-3-of-3/100/UI_3__23-512.png";
    }
    return imgUrl;
  }

  generateDMChannelName(channel) {
    let channelName;
    if (channel.members.length === 2) {
      channel.members.forEach((member) => {
        if (member.id !== this.props.user.id) {
          channelName = member.username;
        }
      });
    } else {
      channelName = "Group Message";
    }
    return channelName;
  }

  showChannelActions(show, channelId) {
    this.setState({ showChannelActions: show, hoverChannelId: channelId });
  }

  dmActions(channelId) {
    return (
      <div className="channel-owner-actions">
        <i
          onClick={() => this.deleteChannel(channelId)}
          class="fas fa-times server-channel-icon channel-owner-action-btn"
        ></i>
      </div>
    );
  }

  deleteChannel(channelId) {
    this.props.removeDMChannel(channelId).then(() => {
      this.props.requestDMChannels().then(() => {
        this.setHomeChannel();
      });
    });
  }

  render() {
    const channels = this.props.channels;

    return (
      <>
        <div
          onClick={() => this.props.setDMRequestModalState(true)}
          className="channel-list-header"
        >
          <button className="search-modal-btn">
            Find or start a conversation
          </button>
        </div>
        <div className="channels-container">
          <ul onClick={() => this.setHomeChannel()} className="channel-list">
            <li
              className={`channel-list-item-home ${
                this.props.activeDMChannel.id === -1 ? `active-channel` : ``
              }`}
            >
              <div className="dm-list-avatar">
                <i class="fas fa-user-friends"></i>
              </div>
              Friends
            </li>
            <li className="channel-list-item-home">
              <div className="dm-list-avatar">
                <i class="fas fa-meteor"></i>
              </div>
              Nitro
            </li>
          </ul>
          <div className="dm-channel-tab">
            <p>DIRECT MESSAGES</p>
            <i
              className="fas fa-plus create-dm-btn"
              onClick={() => this.props.setDMRequestModalState(true)}
            ></i>
          </div>
          <ul className="channel-list">
            {channels.map((channel) => (
              <li
                onMouseEnter={() => this.showChannelActions(true, channel.id)}
                onMouseLeave={() => this.showChannelActions(false, -1)}
                onClick={() => this.setActiveChannel(channel)}
                className={`channel-list-item-home dm-home-item ${
                  this.props.activeDMChannel.id === channel.id
                    ? `active-channel-home`
                    : ``
                }`}
                key={channel.id}
              >
                <div className="dm-user-wrapper">
                  <div className="dm-list-avatar">
                    <img
                      className="dm-list-img"
                      src={`${this.generateChannelImg(channel)}`}
                      alt=""
                    />
                  </div>
                  <div className="dm-user-name">
                    {this.generateDMChannelName(channel)}
                  </div>
                </div>
                {this.state.showChannelActions &&
                this.state.hoverChannelId === channel.id
                  ? this.dmActions(channel.id)
                  : null}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ChannelHome;
