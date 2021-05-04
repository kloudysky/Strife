import React from "react";

class ChannelHome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.requestMessages(this.props.activeChannel.id);
    this.props.activeDMChannel.id > 0
      ? this.props.requestMessages(this.props.activeDMChannel.id)
      : console.log("STRIFE APP");
  }

  setActiveChannel(channel) {
    this.props.requestMessages(channel.id);
    this.props.setChannel(channel);
    this.props.setDMChannel(channel);
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

  render() {
    const channels = this.props.channels;

    return (
      <>
        <div className="channel-list-header">
          <button className="search-modal-btn">
            Find or start a conversation
          </button>
        </div>
        <div className="channels-container">
          <ul className="channel-list">
            <li className="channel-list-item">
              <div className="dm-list-avatar">
                <i class="fas fa-user-friends"></i>
              </div>
              Friends
            </li>
            <li className="channel-list-item">
              <div className="dm-list-avatar">
                <i class="fas fa-meteor"></i>
              </div>
              Nitro
            </li>
          </ul>
          <div className="dm-channel-tab">
            <p>DIRECT MESSAGES</p>
            <i className="fas fa-plus create-dm-btn"></i>
          </div>
          <ul className="channel-list">
            {channels.map((channel) => (
              <li
                onClick={() => this.setActiveChannel(channel)}
                className={`channel-list-item ${
                  this.props.activeDMChannel.id === channel.id
                    ? `active-channel`
                    : ``
                }`}
                key={channel.id}
              >
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
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ChannelHome;
