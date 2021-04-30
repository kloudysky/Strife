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
        <div id="setting-modal" className="setting-modal">
          <div className="setting-screens">
            <div className="setting-screen"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerSettingsModal;
