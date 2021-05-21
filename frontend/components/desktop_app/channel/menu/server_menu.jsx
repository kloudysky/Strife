import React, { Component } from "react";

export default class ServerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification_modal: false,
    };
  }

  leaveServer() {
    this.props.leaveServerNotification(true);
    this.props.setServerMenu(false);
  }

  openServerSettings() {
    this.props.setServerMenu(false);
    this.props.setEditServerModalState(true);
  }

  render() {
    const currentUserId = this.props.currentUser.id;
    const ownerId = this.props.activeServer.owner_id;
    let serverMenuClass = this.props.modalState
      ? "server-menu-modal"
      : "server-menu-modal inactive";
    return (
      <>
        <div id="server-menu-modal" className={serverMenuClass}>
          <div className="server-options">
            <button className="server-menu-btn">
              Invite People<i class="server-menu-btn-icon fas fa-user-plus"></i>
            </button>
            <div className="server-menu-br"></div>
            {currentUserId === ownerId ? (
              <button
                onClick={() => this.openServerSettings()}
                className="server-menu-btn edit-server-btn settings-server-btn"
              >
                Server Settings
                <i class="server-menu-btn-icon fas fa-cog"></i>
              </button>
            ) : null}
            {currentUserId === ownerId ? (
              <button
                onClick={() => this.props.setCreateChannelModalState(true)}
                className="server-menu-btn edit-server-btn"
              >
                Create Channel
                <i class="server-menu-btn-icon fas fa-plus-circle"></i>
              </button>
            ) : null}
            {currentUserId === ownerId ? null : (
              <button
                onClick={() => this.leaveServer()}
                className="server-menu-btn leave-server-btn"
              >
                Leave Server
                <i class="server-menu-btn-icon fas fa-sign-out-alt"></i>
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}
