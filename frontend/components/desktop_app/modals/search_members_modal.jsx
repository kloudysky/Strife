import React from "react";
export default class SearchMembersModal extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.searchStatus === "invite") {
      const serverMembers = this.props.activeServer.members.map(
        (user) => user.username
      );
      this.state = {
        username: "",
        users: [],
        serverMembers,
      };
    } else {
      this.state = {
        username: "",
        users: [],
        serverMembers: [],
      };
    }

    console.log("CONSTRUCTOR");

    this.updateName = this.updateName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAddMember = this.handleAddMember.bind(this);
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
      if (this.props.searchedUsers.length < 1) {
        return <div className="no-searched-users">NO RESULTS FOUND</div>;
      }
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
          >
            {this.state.users.includes(user.username) ? (
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
                ></path>
              </svg>
            ) : null}
          </div>
        </div>
      ));
    } else {
      return null;
    }
  }

  searchedServerUsers() {
    if (this.state.username.length > 0) {
      if (this.props.searchedUsers.length < 1) {
        return <div className="no-searched-users">NO RESULTS FOUND</div>;
      }
      return this.props.searchedUsers.map((user) => (
        <div
          key={user.username}
          className="searched-user-wrapper"
          onClick={
            this.state.serverMembers.includes(user.username)
              ? null
              : this.handleAddMember
          }
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
            value={user.username}
            id={user.username}
            className={`search-server-user-checkbox ${
              this.state.serverMembers.includes(user.username)
                ? "search-user-server-checkbox-checked"
                : ""
            }`}
          >
            {this.state.serverMembers.includes(user.username) ? `Added` : `Add`}
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

  copyInviteCode() {
    navigator.clipboard
      .writeText(this.props.activeServer.invite_code.toUpperCase())
      .then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
  }

  serverFooter() {
    return (
      <div className="search-server-modal-footer">
        <div style={{ width: "100%" }} className="search-server-invite-footer">
          <p>SEND A SERVER INVITE CODE TO A FRIEND</p>
          <div className="search-server-invite-input-wrapper">
            <input type="text" value={this.props.activeServer.invite_code} />
            <button onClick={() => this.copyInviteCode()}>Copy</button>
          </div>
        </div>
      </div>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const channel_type = this.state.users.length > 1 ? 2 : 1;
    const channel_name = this.state.users.length === 1 ? "DM" : "Group DM";
    const channel = {
      channel_name,
      owner_id: this.props.currentUser.id,
      server_id: null,
      channel_type,
      users: this.state.users,
    };

    if (this.state.users.length < 1) {
      this.props.dispatchChannelError(["Group DM needs to have users"]);
    } else if (this.state.users.length === 1) {
      let dmExists = false;
      let dmChannel;
      const dmUser = this.state.users[0];
      const dmChannels = this.props.channels.filter(
        (channel) => channel.members.length === 2
      );
      dmChannels.forEach((channel) => {
        channel.members.forEach((member) => {
          if (member.username === dmUser) {
            dmExists = true;
            dmChannel = channel;
          }
        });
      });
      if (dmExists) {
        this.props.setActiveChannel(dmChannel);
        this.closeModal();
      } else {
        this.props
          .createChannel(channel)
          .then((response) => console.log(response));
        this.closeModal();
      }
    } else {
      this.props
        .createChannel(channel)
        .then((response) => console.log(response));
      this.closeModal();
    }
  }

  handleAddMember(e) {
    e.preventDefault();
    console.log(e.target.id);

    const serverMember = {
      server_id: this.props.activeServer.id,
      member_username: e.target.id,
    };

    this.props.addServerMember(serverMember).then((response) => {
      const server = response.servers.filter(
        (server) => server.id === this.props.activeServer.id
      )[0];
      this.props.setActiveServer(server);
      let serverMembers = this.state.serverMembers;
      serverMembers.push(e.target.id);
      this.setState({ serverMembers });
    });
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
