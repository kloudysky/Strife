import React, { Component } from "react";

export class ServerSettingsModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("setting-modal");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setServerSettingModalState(false);
    }, 100);
  }

  render() {
    return (
      <div id="modal-setting-wrapper" className="modal-setting-wrapper">
        <div className="settings-grid-left">
          <div className="settings-menu">
            <h3>SERVER NAME</h3>
            <div className="settings-menu-btn">Overview</div>
            <div className="settings-menu-br"></div>
            <div className="settings-menu-btn btn-danger">Leave Server</div>
          </div>
        </div>
        <div className="settings-grid-right">
          <div className="settings-info-wrapper">
            <div className="server-settings-info">
              <div className="server-settings-img">
                <h3>SERVER OVERVIEW</h3>
                <div className="server-img-select-area">
                  <div className="server-img-select">SN</div>
                  <p>Change server image functionality does not work yet</p>
                </div>
              </div>
              <div className="server-settings-name">
                <h3>SERVER NAME</h3>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="settings-close-btn-area">
            <div className="settings-close-btn">
              <div className="btn-escape">X</div>
              <div className="btn-escape-text">ESC</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerSettingsModal;
