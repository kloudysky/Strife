import React, { Component } from "react";

export class LeaveServerModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("notification-modal");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setLeaveNotificationModalState(false);
    }, 100);
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
                <button className="notification-btn notification-action">
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

export default LeaveServerModal;
