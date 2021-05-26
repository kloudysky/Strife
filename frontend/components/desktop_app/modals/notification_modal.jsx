import React, { Component } from "react";

export class ChannelNotificationModal extends Component {
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("notification-modal");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setChannelNotificationModalState(false);
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
                <h3>Hold up</h3>
                <p>
                  You only have one channel left. Create another channel, then
                  you can delete this one.
                </p>
              </div>
              <div className="notification-footer">
                <button
                  onClick={() => this.closeModal()}
                  className="notification-btn notification-close"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelNotificationModal;
