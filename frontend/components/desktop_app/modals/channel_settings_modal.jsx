import React, { Component } from "react";
import ChannelNotificationModal from "./notification_modal";

export class ChannelSettingsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_channel_name: this.props.activeChannel.channel_name,
    };
  }
  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("modal-setting-wrapper");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    this.props.clearChannelErrors();
    setTimeout(() => {
      this.props.setChannelSettingsModalState(false);
    }, 100);
  }

  showChannelNotificationModal() {
    this.props.setChannelNotificationModalState(true);
  }

  updateName(value) {
    this.setState({
      new_channel_name: value,
    });
  }

  message() {
    return (
      <ul>
        {this.props.channelErrors.map((error, i) => (
          <li
            className={`render-error server-update-message ${
              error === "Channel name updated" ? "update-name-message" : ""
            }`}
            key={i}
          >
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    const channel = {
      id: this.props.activeChannel.id,
      channel_name: this.state.new_channel_name,
      owner_id: this.props.currentUser.id,
    };

    if (this.state.new_channel_name.length < 1) {
      this.props.dispatchChannelError(["Channel name cannot be blank"]);
    } else {
      this.props.updateChannel(channel).then(() => {
        this.props
          .requestServerChannels(this.props.activeServer.id)
          .then(() => {
            this.props.setActiveChannel(
              this.props.channels.filter(
                (channel) => channel.id === this.props.activeChannel.id
              )[0]
            );
            this.props.dispatchChannelError(["Channel name updated"]);
          });
        // this.props.dispatchServerError(["Server name updated"]);
      });
    }
  }

  deleteChannel() {
    this.props.deleteChannel(this.props.activeChannel.id).then(() => {
      this.props.requestServerChannels(this.props.activeServer.id).then(() => {
        this.props.setActiveChannel(this.props.activeServer.channels[0]);
      });

      this.closeModal();
    });
  }

  render() {
    return (
      <div id="modal-setting-wrapper" className="modal-setting-wrapper">
        <div className="settings-grid-left">
          <div className="settings-menu">
            <div
              style={{
                display: "flex",
                color: "#8f9296",
                alignItems: "baseline",
              }}
            >
              <h3># {this.props.activeChannel.channel_name.toUpperCase()}</h3>
              <p style={{ fontSize: "10px", marginLeft: "5px" }}>
                TEXT CHANNELS
              </p>
            </div>
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
            <h3 style={{ color: "white" }}>OVERVIEW</h3>
            <form>
              <div className="server-settings-name">
                <h3 style={{ color: "white" }}>CHANNEL NAME</h3>
                <input
                  name="name"
                  onChange={(e) => this.updateName(e.target.value)}
                  value={this.state.new_channel_name}
                  type="text"
                />
                <button
                  onClick={(e) => this.handleSubmit(e)}
                  type="submit"
                  className={`save-btn save-btn-${
                    this.state.new_channel_name ===
                    this.props.activeChannel.channel_name
                  }`}
                  disabled={
                    this.state.new_channel_name ===
                    this.props.activeChannel.channel_name
                  }
                >
                  Save
                </button>
                {this.message()}
              </div>
            </form>
            <div className="settings-bottom-img">
              <img
                src="https://discord.com/assets/bfffd518c76d3f6bc5e96eb52e4ae2cf.svg"
                alt=""
              />
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
