import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import MessagesContainer from "./message/messages_container";
import ServerFormContainer from "./server/server_form_container";
import StrifeNavBar from "./navbar/strife_navbar_container";

class DesktopApp extends React.Component {
  render() {
    return (
      <div className="desktop-app">
        <StrifeNavBar />
        <ServerIndexContainer />
        <ChannelIndexContainer />
        <MessagesContainer />
        <ServerFormContainer />
      </div>
    );
  }
}

export default DesktopApp;
