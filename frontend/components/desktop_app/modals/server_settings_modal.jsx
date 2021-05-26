import React, { Component } from "react";

export class ServerSettingsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_server_name: this.props.activeServer.server_name,
      icon: this.props.activeServer.icon,
    };
  }

  closeModal() {
    // let wrapper = document.getElementById("modal-notification-wrapper");
    let modal = document.getElementById("modal-setting-wrapper");

    modal.classList.add("transition-out");
    // wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.setEditServerModalState(false);
    }, 100);
  }

  updateName(value) {
    // e.preventDefault();
    this.setState({
      new_server_name: value,
    });
  }

  message() {
    return (
      <ul>
        {this.props.serverErrors.map((error, i) => (
          <li
            className={`render-error server-update-message ${
              error === "Server name updated" ? "update-name-message" : ""
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

    const server = {
      id: this.props.activeServer.id,
      icon: this.state.icon,
      server_name: this.state.new_server_name,
      owner_id: this.props.currentUser.id,
    };

    if (this.state.new_server_name.length < 1) {
      this.props.dispatchServerError(["Server name cannot be blank"]);
    } else {
      this.props.updateServer(server).then(() => {
        this.props.requestServers().then(() => {
          this.props.setActiveServer(
            this.props.servers.filter(
              (server) => server.id === this.props.activeServer.id
            )[0]
          );
          this.props.dispatchServerError(["Server name updated"]);
        });
        // this.props.dispatchServerError(["Server name updated"]);
      });
    }
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

  render() {
    return (
      <div id="modal-setting-wrapper" className="modal-setting-wrapper">
        <div className="settings-grid-left">
          <div className="settings-menu">
            <h3>SERVER NAME</h3>
            <div className="settings-menu-btn">Overview</div>
            <div className="settings-menu-br"></div>
            <div
              onClick={() => this.deleteServer()}
              className="settings-menu-btn btn-danger"
            >
              Delete Server
            </div>
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
              <form>
                <div className="server-settings-name">
                  <h3>SERVER NAME</h3>
                  <input
                    name="name"
                    onChange={(e) => this.updateName(e.target.value)}
                    value={this.state.new_server_name}
                    type="text"
                  />
                  <button
                    onClick={(e) => this.handleSubmit(e)}
                    type="submit"
                    className={`save-btn save-btn-${
                      this.state.new_server_name ===
                      this.props.activeServer.server_name
                    }`}
                    disabled={
                      this.state.new_server_name ===
                      this.props.activeServer.server_name
                    }
                  >
                    Save
                  </button>
                  {this.message()}
                </div>
              </form>
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

export default ServerSettingsModal;
