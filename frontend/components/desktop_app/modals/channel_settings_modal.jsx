import React, { Component } from "react";
import ChannelNotificationModal from "./notification_modal";

export class ChannelSettingsModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("modal-setting-wrapper");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setChannelSettingsModalState(false);
    }, 100);
  }

  showChannelNotificationModal() {
    this.props.setChannelNotificationModalState(true);
  }

  deleteChannel() {
    if (this.props.activeServer.channels.length > 1) {
      this.props.deleteChannel(this.props.activeChannel.id).then(() => {
        this.props
          .requestServerChannels(this.props.activeServer.id)
          .then(() => {
            this.props.setActiveChannel(this.props.activeServer.channels[0]);
          });

        this.closeModal();
      });
    } else {
      this.showChannelNotificationModal();
    }
  }

  render() {
    return (
      <div id="modal-setting-wrapper" className="modal-setting-wrapper">
        <div className="settings-grid-left">
          <div className="settings-menu">
            <h3>CHANNEL NAME</h3>
            <div className="settings-menu-btn">Overview</div>
            <div className="settings-menu-br"></div>
            <div
              onClick={() => this.deleteChannel()}
              className="settings-menu-btn btn-danger"
            >
              Delete Channel
            </div>
          </div>
        </div>
        <div className="settings-grid-right">
          <div className="settings-info-wrapper">
            <div className="server-settings-info">
              <div className="server-settings-img">
                <h3>CHANNEL OVERVIEW</h3>
              </div>
              <div className="server-settings-name">
                <h3>CHANNEL NAME</h3>
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

export default ChannelSettingsModal;
