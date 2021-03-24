import React from "react";

class ChannelHome extends React.Component {
  constructor(props) {
    super(props);
  }

  setActiveChannel(channel) {
    this.props.requestMessages(channel.id);
    this.props.setChannel(channel);
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
      <div>
        <div className="channel-list-header">
          <button className="search-modal-btn">
            Find or start a conversation
          </button>
        </div>
        <div className="channels-container">
          <div className="dm-channel-tab">
            <p>DIRECT MESSAGES</p>
            <i className="fas fa-plus create-dm-btn"></i>
          </div>
          <ul className="channel-list">
            {channels.map((channel) => (
              <li
                onClick={() => this.setActiveChannel(channel)}
                className="channel-list-item"
                key={channel.id}
              >
                {this.generateDMChannelName(channel)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChannelHome;
