import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "",
      server_name: "",
      currentModal: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div
        className={`create-server-container create-server-container-${this.props.modalState}`}
      >
        {this.selectServerType(this.props.modalState)}
        {this.selectCommunityType(this.props.modalState)}
        {this.customizeServerForm(this.props.modalState)}
      </div>
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = {
      icon: this.state.icon,
      server_name: this.state.server_name,
      owner_id: this.props.currentUser.id,
    };
    this.props.createServer(server);
    this.closeModal();
  }

  closeModal() {
    this.props.setCreateServerModalState(false);
    this.setState({
      icon: "",
      server_name: "",
      currentModal: 1,
    });
  }

  nextModal() {
    this.setState({
      currentModal: this.state.currentModal + 1,
    });
  }

  previousModal() {
    this.setState({
      currentModal: this.state.currentModal - 1,
    });
  }

  selectServerType(modalState) {
    return (
      <div
        className={`server-type-list server-type-list-${modalState}-${this.state.currentModal}`}
      >
        <span className="close-modal" onClick={() => this.closeModal()}>
          <i className="fas fa-times"></i>
        </span>
        <h2 className="create-server-header">Create a server</h2>
        <p className="create-server-header-p">
          Your server is where you and your friends hang out. Make yours and
          start talking
        </p>
        <div className="server-types">
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg"
              alt=""
            />
            <h3>Create My Own</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <p className="bold-font-p">START FROM A TEPLATE</p>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/b13e5fb6748d48b8d32a0a7b720d3a31.svg"
              alt=""
            />
            <h3>Gaming</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/d149a7d17b8c891a36059af8d4108813.svg"
              alt=""
            />
            <h3>School Club</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg"
              alt=""
            />
            <h3>Study Group</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/6670414aa93c6a4b3b5c7f57ead40533.svg"
              alt=""
            />
            <h3>Friends</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg"
              alt=""
            />
            <h3>Artists {`&`} Creators</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg"
              alt=""
            />
            <h3>Local Community</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
        </div>
        <div className="type-list-footer">
          <h3 className="type-list-footer-header">Have an invite already?</h3>
          <button>Join a Server</button>
        </div>
      </div>
    );
  }

  selectCommunityType(modalState) {
    return (
      <div
        className={`community-type-list community-type-list-${modalState}-${this.state.currentModal}`}
      >
        <span className="close-modal" onClick={() => this.closeModal()}>
          <i className="fas fa-times"></i>
        </span>
        <div className="community-type-modal-content">
          <h2 className="create-server-header">
            Tell us more about your server
          </h2>
          <p className="create-server-header-p">
            In order to help you with your setup, is your new server for just a
            few friends or a larger community?
          </p>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg"
              alt=""
            />
            <h3>For a club or community</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn" onClick={() => this.nextModal()}>
            <img
              src="https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg"
              alt=""
            />
            <h3>For me and my friends</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <p className="skip-modal-p">
            Not sure? You can <a href="">skip this question</a> for now
          </p>
        </div>
        <div className="community-list-footer">
          <span className="back-form-btn" onClick={() => this.previousModal()}>
            Back
          </span>
        </div>
      </div>
    );
  }

  customizeServerForm(modalState) {
    return (
      <div
        className={`customize-server-form customize-server-form-${modalState}-${this.state.currentModal}`}
      >
        <span className="close-modal" onClick={() => this.closeModal()}>
          <i className="fas fa-times"></i>
        </span>
        <h3 className="create-server-header">Customize your server</h3>
        <p className="create-server-header-p">
          Give your new server a personality with a name and an icon. You can
          always change it later.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label className="create-server-label">IMAGE URL</label>
          <input
            className="create-server-input"
            type="text"
            value={this.state.icon}
            onChange={this.update("icon")}
          />
          <label className="create-server-label">SERVER NAME</label>
          <input
            className="create-server-input"
            type="text"
            value={this.state.server_name}
            onChange={this.update("server_name")}
          />

          <div className="community-list-footer">
            <span
              className="back-form-btn"
              onClick={() => this.previousModal()}
            >
              Back
            </span>
            <button type="submit" className="create-server-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ServerForm;
