import React from "react";
export default class SearchMembersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      users: [],
    };

    this.updateName = this.updateName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.unfinished = this.unfinished.bind(this);
  }

  unfinished(e) {
    e.preventDefault();
  }

  updateName(e) {
    e.preventDefault();
    const username = e.target.value;
    this.setState({
      username,
    });

    if (username.length > 0) {
      this.props.searchUsers(username.toLowerCase());
    }
  }

  searchedDMUsers() {
    if (this.state.username.length > 0) {
      return this.props.searchedUsers.map((user) => (
        <div
          className="searched-user-wrapper"
          onClick={() => this.toggleAddUser(user.username)}
        >
          <div className="searched-user">
            <div className="searched-user-avatar">
              <img className="settings-img" src={user.avatar} alt="" />
            </div>
            <div className="searched-user-username" key={user.username}>
              {user.username}
            </div>
          </div>
          <div
            id={user.username}
            className={`search-user-checkbox ${
              this.state.users.includes(user.username)
                ? "search-user-checkbox-checked"
                : ""
            }`}
          ></div>
        </div>
      ));
    } else {
      return null;
    }
  }

  searchedServerUsers() {
    if (this.state.username.length > 0) {
      return this.props.searchedUsers.map((user) => (
        <div
          className="searched-user-wrapper"
          onClick={() => this.toggleAddUser(user.username)}
        >
          <div className="searched-user">
            <div className="searched-user-avatar">
              <img className="settings-img" src={user.avatar} alt="" />
            </div>
            <div className="searched-user-username" key={user.username}>
              {user.username}
            </div>
          </div>
          <div
            id={user.username}
            className={`search-server-user-checkbox ${
              this.state.users.includes(user.username)
                ? "search-user-server-checkbox-checked"
                : ""
            }`}
          >
            Add
          </div>
        </div>
      ));
    } else {
      return null;
    }
  }

  toggleAddUser(username) {
    if (this.state.users.includes(username)) {
      let users = this.state.users;
      const index = users.indexOf(username);
      if (index > -1) {
        users.splice(index, 1);
        this.setState({ users });
      }
    } else {
      let users = this.state.users;
      users.push(username);
      this.setState({ users });
    }
  }

  closeModal() {
    this.setState({
      username: "",
    });
    let wrapper = document.getElementById("create-server-modal-wrapper");
    let modal = document.getElementById("search-modal");

    modal.classList.add("transition-out");
    wrapper.classList.add("inactive");

    setTimeout(() => {
      // this.props.clearErrors();
      if (this.props.searchStatus === "invite") {
        this.props.setInviteMemberModalState(false);
      } else {
        this.props.setDMRequestModalState(false);
      }
    }, 100);
  }

  dmFooter() {
    return (
      <div className="search-modal-footer">
        <button
          className={`search-modal-submit search-modal-submit-${
            this.state.users.length < 1
          }`}
          onClick={this.handleFormSubmit}
          disabled={this.state.users.length < 1}
        >
          Create Group DM
        </button>
      </div>
    );
  }

  serverFooter() {
    return (
      <div className="search-server-modal-footer">
        <div style={{ width: "100%" }} className="search-server-invite-footer">
          <p>SEND A SERVER INVITE LINK TO A FRIEND</p>
          <div className="search-server-invite-input-wrapper">
            <input type="text" value="https://discord.gg/AKbnTegD" />
            <button>Copy</button>
          </div>
        </div>
      </div>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    let channel_type = 1;
    if (this.state.users.length > 1) {
      channel_type = 2;
    }

    const channel = {
      channel_name: "Group DM",
      owner_id: this.props.currentUser.id,
      server_id: null,
      channel_type,
      users: this.state.users,
    };

    if (this.state.users.length < 1) {
      this.props.dispatchChannelError(["Group DM needs to have users"]);
    } else {
      this.props.createChannel(channel);
      this.closeModal();
    }
  }

  errors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="render-error" key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let searchClass = this.props.modalState
      ? "search-modal"
      : "search-modal inactive";

    return (
      <div
        id="create-server-modal-wrapper"
        className="create-server-modal-wrapper"
      >
        <div id="search-modal" className={searchClass}>
          <div className="close-form" onClick={() => this.closeModal()}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#c7ccd1"
                d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              ></path>
            </svg>
          </div>
          <div className="search-header">Find Users</div>
          <div className="search-member-body">
            <div className="search-member-input-wrapper">
              <input
                placeholder="Type the username you want to find"
                type="text"
                className="search-member-input-field"
                onChange={this.updateName}
              />
            </div>
            <div className="search-member-list">
              {this.props.searchStatus === "invite"
                ? this.searchedServerUsers()
                : this.searchedDMUsers()}
            </div>
          </div>
          {this.props.searchStatus === "invite"
            ? this.serverFooter()
            : this.dmFooter()}
        </div>
      </div>
    );
  }
}