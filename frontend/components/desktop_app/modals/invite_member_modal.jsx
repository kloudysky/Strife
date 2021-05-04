import React, { Component } from "react";

export class InviteMemberModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("notification-modal");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setLeaveNotificationModalState(false);
    }, 100);
  }

  leaveServer() {
    this.props.leaveServer(this.props.activeServer.id).then(() => {
      this.props.requestDMChannels();
      this.props.setActiveServer({
        id: -1,
      });
      this.props.setActiveChannel(this.props.activeDMChannel);
      this.closeModal();
    });
  }

  render() {
    return (
      <div
        id="modal-notification-wrapper"
        className="modal-notification-wrapper"
      >
        <div id="notification-modal" className="notification-modal">
          <div className="notification-screens">
            <div className="notification-screen">
              <div className="notification-prompt">
                <h3>LEAVE '{this.props.activeServer.server_name}'</h3>
                <p>
                  Are you sure you want to leave{" "}
                  {this.props.activeServer.server_name}?
                </p>
              </div>
              <div className="notification-footer">
                <button
                  onClick={() => this.closeModal()}
                  className="notification-btn notification-close"
                >
                  Cancel
                </button>
                <button
                  onClick={() => this.leaveServer()}
                  className="notification-btn notification-action"
                >
                  Leave Server
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InviteMemberModal;
