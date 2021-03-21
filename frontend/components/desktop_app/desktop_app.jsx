import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";

class DesktopApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.requestDMChannels();
  }

  render() {
    console.log(this.state);
    return (
      <div className="desktop-app">
        <ServerIndexContainer />
        <ChannelIndexContainer />
      </div>
    );
  }
}

export default DesktopApp;
