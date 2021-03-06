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
    let modal = document.getElementById("modal-setting-wrapper");

    modal.classList.add("transition-out");

    setTimeout(() => {
      this.props.clearServerErrors();
      this.props.setEditServerModalState(false);
    }, 100);
  }

  updateName(value) {
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
      });
    }
  }

  deleteServer() {
    this.props.deleteServer(this.props.activeServer.id).then(() => {
      this.props.requestDMChannels();
      this.props.setActiveChannel(this.props.activeDMChannel);
      this.props.setActiveServer({
        id: -1,
      });
      this.closeModal();
    });
  }

  render() {
    let serverName;
    if (this.props.activeServer.id !== -1) {
      if (this.props.activeServer.server_name.trim().indexOf(" ") != -1) {
        const titleWords = this.props.activeServer.server_name.split(" ");
        serverName = titleWords[0][0] + titleWords[1][0];
      } else {
        serverName = this.props.activeServer.server_name[0];
      }
    }

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
            <div className="server-settings-invite-code">
              Invite Code: {this.props.activeServer.invite_code}
            </div>
          </div>
        </div>
        <div className="settings-grid-right">
          <div className="settings-info-wrapper">
            <div className="server-settings-info">
              <div className="server-settings-img">
                <h3>SERVER OVERVIEW</h3>
                <div className="server-img-select-area">
                  <div className="server-img-select">{serverName}</div>
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
