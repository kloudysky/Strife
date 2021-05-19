import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import MessagesContainer from "./message/messages_container";
import ServerFormContainer from "./server/server_form_container";
import LeaveServerModal from "./modals/leave_server_modal";
import InviteMememberModal from "./modals/invite_member_modal";
import ServerSettingsModal from "./modals/server_settings_modal";
import UserSettingsModal from "./modals/user_settings_modal";
import StrifeNavBar from "./navbar/strife_navbar_container";
import ServerMembersContainer from "./server/members/server_members_container";

class DesktopApp extends React.Component {
  render() {
    const inviteMember = () => {
      if (this.props.inviteMemberModalState) {
        return <InviteMemberModal />;
      } else {
        return null;
      }
    };
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
            leaveServer={this.props.leaveServer}
            setActiveChannel={this.props.setActiveChannel}
            setActiveServer={this.props.setActiveServer}
            requestDMChannels={this.props.requestDMChannels}
            activeDMChannel={this.props.activeDMChannel}
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
            deleteServer={this.props.deleteServer}
            setActiveChannel={this.props.setActiveChannel}
            setActiveServer={this.props.setActiveServer}
            requestDMChannels={this.props.requestDMChannels}
            activeDMChannel={this.props.activeDMChannel}
          />
        );
      } else {
        return null;
      }
    };
    const userSettings = () => {
      if (this.props.userSettingsModalState) {
        return (
          <UserSettingsModal
            setUserSettingsModalState={this.props.setUserSettingsModalState}
          />
        );
      } else {
        return null;
      }
    };
    return (
      <>
        <div className="desktop-app">
          <ServerIndexContainer />
          <ChannelIndexContainer />
          <div class="main-container">
            <StrifeNavBar />
            <div className="message-area">
              <MessagesContainer />
              <ServerMembersContainer />
            </div>
          </div>
          {createServer()}
          {leaveServer()}
          {inviteMember()}
        </div>
        {serverSettings()}
        {userSettings()}
      </>
    );
  }
}

export default DesktopApp;
