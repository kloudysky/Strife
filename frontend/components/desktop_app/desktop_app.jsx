import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import MessagesContainer from "./message/messages_container";
import ServerFormContainer from "./server/server_form_container";
import LeaveServerModal from "./modals/leave_server_modal";
import ServerSettingsModal from "./modals/server_settings_modal";
import StrifeNavBar from "./navbar/strife_navbar_container";
import ServerMembersContainer from "./server/members/server_members_container";

class DesktopApp extends React.Component {
  render() {
    const createServer = () => {
      if (this.props.createServerModalState) {
        return <ServerFormContainer />;
      } else {
        return null;
      }
    };
    const leaveServer = () => {
      if (this.props.leaveServerModalState) {
        return (
          <LeaveServerModal
            activeServer={this.props.activeServer}
            setLeaveNotificationModalState={
              this.props.setLeaveNotificationModalState
            }
          />
        );
      } else {
        return null;
      }
    };
    const serverSettings = () => {
      if (this.props.editServerModalState) {
        return (
          <ServerSettingsModal
            activeServer={this.props.activeServer}
            setEditServerModalState={this.props.setEditServerModalState}
          />
        );
      } else {
        return null;
      }
    };
    return (
      <>
        <div className="desktop-app">
          <StrifeNavBar />
          <ServerIndexContainer />
          <ChannelIndexContainer />
          <MessagesContainer />
          <ServerMembersContainer />
          {createServer()}
          {leaveServer()}
        </div>
        {serverSettings()}
      </>
    );
  }
}

export default DesktopApp;
