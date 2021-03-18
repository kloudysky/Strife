import React from "react";
import Channel from "./channel";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    const channels = this.props.channels;
    return (
      <div>
        <ul>
          {channels.map((channel) => (
            <Channel channel={channel} key={channel.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ChannelIndex;
