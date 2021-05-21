import React from "react";
export default class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_name: "",
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
          <div className="create-channel-header">Create Text Channel</div>
          <div className="create-channel-body">
            <div className="create-channel-type">
              <div className="channel-type-text">CHANNEL TYPE</div>
              <div role="radiogroup">
                <div
                  role="radio"
                  aria-checked="true"
                  className="text-channel-type"
                >
                  <div className="radio-bar">
                    <svg
                      aria-hidden="false"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="5"
                        class="channel-type-select"
                        fill="currentColor"
                      ></circle>
                    </svg>
                  </div>
                </div>
                <div
                  role="radio"
                  aria-checked="false"
                  className="text-channel-type"
                >
                  <div className="radio-bar">
                    <svg
                      aria-hidden="false"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-channel-name">
              <div className="channel-type-text">CHANNEL NAME</div>
              <div className="channel-name-input-wrapper">
                <div className="channel-name-placeholder-hash">#</div>
                <input
                  className="channel-name-input-field"
                  placeholder="new-channel"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="create-channel-footer">
            <button className="create-channel-submit">Create Channel</button>
            <button className="cancel-modal-button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
