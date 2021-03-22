import React from "react";
import { Collapse } from "react-collapse";

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

  render() {
    const channels = this.props.channels;
    const server = this.props.server;
    return (
      <div>
        <div className="channel-list-header">
          <h3>{server.server_name}</h3>
          <i className="fas fa-angle-down channel-list-header-btn"></i>
        </div>
        <div className="channel-text" onClick={() => this.toggleServerList()}>
          <i className="fas fa-angle-down channel-text-btn"></i>
          <p>TEXT CHANNELS</p>
        </div>

        <ul className="channel-server-list">
          <Collapse isOpened={this.state.showTextChannels}>
            {channels.map((channel) => (
              <li className="channel-list-item" key={channel.id}>
                <i className="fas fa-hashtag"></i>
                {channel.channel_name}
              </li>
            ))}
          </Collapse>
        </ul>
      </div>
    );
  }
}

export default ChannelServer;
