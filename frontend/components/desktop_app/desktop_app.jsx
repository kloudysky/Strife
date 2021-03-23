import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import MessageContainer from "./message/message_container";
import ServerFormContainer from "./server/server_form_container";

class DesktopApp extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div className="desktop-app">
        <ServerIndexContainer />
        <ChannelIndexContainer />
        <MessageContainer />
        <ServerFormContainer />
      </div>
    );
  }
}

export default DesktopApp;
