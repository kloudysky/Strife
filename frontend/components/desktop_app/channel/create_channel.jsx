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
      channel_name: this.state.channel_name,
      owner_id: this.props.currentUser.id,
      server_id: this.props.activeServer.id,
      channel_type: 0,
    };

    if (this.state.channel_name.length < 1) {
      this.props.dispatchChannelError(["Channel name cannot be blank"]);
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
          <form>
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
                          className="channel-type-select"
                          fill="currentColor"
                        ></circle>
                      </svg>
                      <div className="channel-type-info">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="channel-type-hash"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                          ></path>
                        </svg>
                        <div className="channel-type-description">
                          <div className="channel-type-heading">
                            Text Channel
                          </div>
                          <div className="channel-type-description-text">
                            Chat with all the members in the channel in real
                            time
                          </div>
                        </div>
                      </div>
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
                      <div className="channel-type-info">
                        <svg
                          className="channel-type-hash"
                          aria-hidden="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                            aria-hidden="true"
                          ></path>
                        </svg>
                        <div className="channel-type-description">
                          <div className="channel-type-heading">
                            Voice Channel
                          </div>
                          <div className="channel-type-description-text">
                            Every big tech company is adding this, should
                            Strife?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-channel-name">
                <div className="channel-type-text">CHANNEL NAME</div>
                <div className="channel-name-input-wrapper">
                  <div className="channel-name-placeholder-hash">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="inputPrefix-1gzNds"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="name"
                    className="channel-name-input-field"
                    placeholder="new-channel"
                    type="text"
                    onChange={this.updateName}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="create-channel-footer">
            <button
              className={`create-channel-submit create-channel-submit-${
                this.state.channel_name.length < 1
              }`}
              onClick={this.handleFormSubmit}
              disabled={this.state.channel_name.length < 1}
            >
              Create Channel
            </button>
            <button
              className="cancel-modal-button"
              onClick={() => this.closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
