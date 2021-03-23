import React from "react";

class ChannelHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const channels = this.props.channels;

    return (
      <div>
        <div className="channel-list-header">
          <h3>SEARCH BAR</h3>
        </div>
        <div className="channels-container">
          <div className="dm-channel-tab">
            <p>DIRECT MESSAGES</p>
            <i className="fas fa-plus create-dm-btn"></i>
          </div>
          <ul className="channel-list">
            {channels.map((channel) => (
              <li className="channel-list-item" key={channel.id}>
                {channel.channel_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChannelHome;
