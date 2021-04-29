import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import MessagesContainer from "./message/messages_container";
import ServerFormContainer from "./server/server_form_container";
import StrifeNavBar from "./navbar/strife_navbar_container";
import ServerMembersContainer from "./server/members/server_members_container";

class DesktopApp extends React.Component {
  render() {
    const createServer = () => {
      console.log(this.props.createServerModalState);
      if (this.props.createServerModalState) {
        return <ServerFormContainer />;
      } else {
        return null;
      }
    };
    return (
      <div className="desktop-app">
        <StrifeNavBar />
        <ServerIndexContainer />
        {createServer()}
        <ChannelIndexContainer />
        <MessagesContainer />
        <ServerMembersContainer />
      </div>
    );
  }
}

export default DesktopApp;
