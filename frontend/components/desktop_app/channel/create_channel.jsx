import React from "react";
export default class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_name: "",
    };

    this.updateName = this.updateName.bind(this);
    this.handleJoinSubmit = this.handleJoinSubmit.bind(this);
    this.unfinished = this.unfinished.bind(this);
  }

  unfinished(e) {
    e.preventDefault();
  }

  updateName(e) {
    e.preventDefault();

    this.setState({
      channel_name: e.target.value,
    });
  }

  closeModal() {
    this.setState({
      server_name: "",
    });
    let wrapper = document.getElementById("create-server-modal-wrapper");
    let modal = document.getElementById("create-channel-modal");

    modal.classList.add("transition-out");
    wrapper.classList.add("inactive");

    setTimeout(() => {
      this.props.clearErrors();
      this.props.setCreateChannelModalState(false);
    }, 100);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const channel = {
      channel_name: this.state.server_name,
      owner_id: this.props.currentUser.id,
      server_id: this.props.activeServer.id,
    };

    if (this.state.channel_name.length < 1) {
      console.log(this.state.server_name);
      this.props.dispatchServerError(["Server name cannot be blank"]);
    } else {
      this.props.createServer(server);
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
    let createChannelClass = this.props.modalState
      ? "create-channel-modal"
      : "create-channel-modal inactive";

    return (
      <div
        id="create-server-modal-wrapper"
        className="create-server-modal-wrapper"
      >
        <div id="create-channel-modal" className={createChannelClass}>
          <div className="close-form" onClick={() => this.closeModal()}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#c7ccd1"
                d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
