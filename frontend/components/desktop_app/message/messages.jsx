import React from "react";
import actionCable from "actioncable";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
    this.CableApp = {};
    this.CableApp.cable = actionCable.createConsumer(
      "wss://strifeapp.herokuapp.com/cable"
      // "ws://localhost:3000/cable"
    );
  }
  componentDidMount() {
    this.CableApp.messages = this.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: this.props.channel.id,
      },
      {
        connected: () => {},
        received: (message) => {
          this.getResponseMessage(message);
        },
        speak: function (message) {
          return this.perform("speak", message);
        },
      }
    );
  }

  getResponseMessage(message) {
    const response = JSON.parse(message.json);
    if (this.props.user.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView({ block: "nearest" });
  }

  render() {
    const messages = this.props.messages;
    const channel = this.props.channel;

    return (
      <div className="message-list">
        <div className="message-ul">
          {channel.channel_type > 0
            ? this.welcomeDMMessage(channel.channel_name)
            : this.welcomeMessage(channel.channel_name)}
          {messages.map((message) => (
            <div key={message.id} className="message-li">
              <div className="author-avatar">
                <img className="avatar-img" src={`${message.author.avatar}`} />
              </div>
              <div className="msg-username">{message.author.username}</div>
              <div className="user-msg">{message.content}</div>
            </div>
          ))}
          <div ref={this.bottom} id="spacer" />
        </div>
      </div>
    );
  }

  welcomeDMMessage(name) {
    return (
      <div className="channel-welcome">
        <div className="welcome-img-contianer">
          <img src="" alt="" />
        </div>
        <h1 className="welcome-header">{name}</h1>
        <p className="welcome-text">
          This is the beginning of your bond history with @{name}
        </p>
        <hr className="welcome-hr" />
      </div>
    );
  }

  welcomeMessage(name) {
    return (
      <div className="channel-welcome">
        <div className="welcome-img-contianer">
          <img src="" alt="" />
        </div>
        <h1 className="welcome-header">Welcome to {name}!</h1>
        <p className="welcome-text">This is the start of your {name} plot</p>
        <hr className="welcome-hr" />
      </div>
    );
  }
}

export default Messages;
