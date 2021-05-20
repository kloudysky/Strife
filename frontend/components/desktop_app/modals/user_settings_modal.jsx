import React, { Component } from "react";

export class UserSettingsModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("modal-setting-wrapper");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setUserSettingsModalState(false);
    }, 100);
  }

  deleteServer() {
    this.props.deleteServer(this.props.activeServer.id).then(() => {
      this.props.requestDMChannels();
      this.props.setActiveServer({
        id: -1,
      });
      this.props.setActiveChannel(this.props.activeDMChannel);
      this.closeModal();
    });
  }

  handleLogout() {
    this.closeModal();
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div id="modal-setting-wrapper" className="modal-setting-wrapper">
        <div className="settings-grid-left">
          <div className="settings-menu">
            <h3>USER SETTINGS</h3>
            <div className="settings-menu-btn">My Account</div>
            <div className="settings-menu-br"></div>
            <div
              onClick={() => this.handleLogout()}
              className="settings-menu-btn btn-danger"
            >
              Log Out
            </div>
          </div>
        </div>
        <div className="settings-grid-right">
          <div className="settings-info-wrapper">
            <div className="server-settings-info">
              <div className="server-settings-img">
                <h3>My Account</h3>
                <div className="server-img-select-area">
                  <div className="server-img-select">SN</div>
                  <p>Change server image functionality does not work yet</p>
                </div>
              </div>
              <div className="server-settings-name">
                <h3>Username</h3>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="settings-close-btn-area">
            <div
              onClick={() => this.closeModal()}
              className="settings-close-btn"
            >
              <div className="btn-escape">X</div>
              <div className="btn-escape-text">ESC</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSettingsModal;
