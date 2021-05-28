import React from "react";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import CreateChannelContainer from "./channel/create_channel_container";
import MessagesContainer from "./message/messages_container";
import ServerFormContainer from "./server/server_form_container";
import LeaveServerModal from "./modals/leave_server_modal";
import ChannelSettingsModal from "./modals/channel_settings_modal";
import ChannelNotificationModal from "./modals/notification_modal";
import SearchMembersModal from "./modals/search_members_modal";
import ServerSettingsModal from "./modals/server_settings_modal";
import UserSettingsModal from "./modals/user_settings_modal";
import StrifeNavBar from "./navbar/strife_navbar_container";
import ServerMembersContainer from "./server/members/server_members_container";

class DesktopApp extends React.Component {
  render() {
    const inviteMember = () => {
      if (this.props.inviteMemberModalState) {
        return (
          <SearchMembersModal
            searchStatus="invite"
            setInviteMemberModalState={this.props.setInviteMemberModalState}
            searchUsers={this.props.searchUsers}
            searchedUsers={this.props.searchedUsers}
          />
        );
      } else {
        return null;
      }
    };
    const dmRequest = () => {
      if (this.props.dmRequestModalState) {
        return (
          <SearchMembersModal
            searchStatus="dm"
            setDMRequestModalState={this.props.setDMRequestModalState}
            searchUsers={this.props.searchUsers}
            searchedUsers={this.props.searchedUsers}
          />
        );
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
    const createChannel = () => {
      if (this.props.createChannelModalState) {
        return <CreateChannelContainer />;
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
            currentUser={this.props.currentUser}
            updateServer={this.props.updateServer}
            serverErrors={this.props.serverErrors}
            dispatchServerError={this.props.dispatchServerError}
            requestServers={this.props.requestServers}
            servers={this.props.servers}
            clearServerErrors={this.props.clearServerErrors}
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
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        );
      } else {
        return null;
      }
    };
    const channelNotification = () => {
      if (this.props.showChannelNotificationModalState) {
        return (
          <ChannelNotificationModal
            setChannelNotificationModalState={
              this.props.setChannelNotificationModalState
            }
          />
        );
      } else {
        return null;
      }
    };
    const channelSettings = () => {
      if (this.props.channelSettingsModalState) {
        return (
          <ChannelSettingsModal
            setChannelSettingsModalState={
              this.props.setChannelSettingsModalState
            }
            activeChannel={this.props.activeChannel}
            activeServer={this.props.activeServer}
            currentUser={this.props.currentUser}
            requestServerChannels={this.props.requestServerChannels}
            deleteChannel={this.props.deleteChannel}
            setActiveChannel={this.props.setActiveChannel}
            setChannelNotificationModalState={
              this.props.setChannelNotificationModalState
            }
            channelErrors={this.props.channelErrors}
            dispatchChannelError={this.props.dispatchChannelError}
            clearChannelErrors={this.props.clearChannelErrors}
            updateChannel={this.props.updateChannel}
            channels={this.props.channels}
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
          {createChannel()}
          {leaveServer()}
          {inviteMember()}
          {dmRequest()}
        </div>
        {serverSettings()}
        {userSettings()}
        {channelSettings()}
        {channelNotification()}
      </>
    );
  }
}

export default DesktopApp;
