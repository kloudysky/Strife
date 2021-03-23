import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      server_name: "",
    };
  }

  render() {
    console.log("SERVER FORM");
    console.log(this.props);
    return (
      <div
        className={`create-server-container create-server-container-${this.props.modalState}`}
      >
        {this.selectServerType(this.props.modalState)}
        {this.selectCommunityType()}
        {this.customizeServerForm()}
      </div>
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.createServer(server);
  }

  closeModal() {
    this.props.setCreateServerModalState(false);
  }

  selectServerType(modalState) {
    return (
      <div className={`server-type-list server-type-list-${modalState}`}>
        <span className="close-modal" onClick={() => this.closeModal()}>
          <i className="fas fa-times"></i>
        </span>
        <h2 className="create-server-header">Create a server</h2>
        <p className="create-server-header-p">
          Your server is where you and your friends hang out. Make yours and
          start talking
        </p>
        <div className="server-types">
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg"
              alt=""
            />
            <h3>Create My Own</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <p className="bold-font-p">START FROM A TEPLATE</p>
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/b13e5fb6748d48b8d32a0a7b720d3a31.svg"
              alt=""
            />
            <h3>Gaming</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/d149a7d17b8c891a36059af8d4108813.svg"
              alt=""
            />
            <h3>School Club</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg"
              alt=""
            />
            <h3>Study Group</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/6670414aa93c6a4b3b5c7f57ead40533.svg"
              alt=""
            />
            <h3>Friends</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn">
            <img
              src="https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg"
              alt=""
            />
            <h3>Artists {`&`} Creators</h3>
            <i className="fas fa-chevron-right list-btn-arrow"></i>
          </button>
          <button className="server-type-btn">
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

  selectCommunityType() {
    return (
      <div className="community-type-list">
        <h3>Tell us more about your server</h3>
        <p>
          In order to help you with your setup, is your new server for just a
          few friends or a larger community?
        </p>
        <button className="server-type-btn">
          <img
            src="https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg"
            alt=""
          />
          Study Group
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className="server-type-btn">
          <img
            src="https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg"
            alt=""
          />
          Study Group
          <i className="fas fa-chevron-right"></i>
        </button>
        <p>
          Not sure? You can <a href="">skip this question</a> for now
        </p>{" "}
        <button className="back-form-btn">Back</button>
      </div>
    );
  }

  customizeServerForm() {
    <div className="customize-server-form">
      <form action="POST">
        <label>IMAGE URL</label>
        <input
          type="text"
          value={this.state.img_url}
          onChange={this.update("img_url")}
        />
        <label>SERVER NAME</label>
        <input
          type="text"
          value={this.state.server_name}
          onChange={this.update("server_name")}
        />
      </form>
    </div>;
  }
}

export default ServerForm;
