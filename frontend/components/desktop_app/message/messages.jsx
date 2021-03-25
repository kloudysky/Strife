import React from "react";
import actionCable from "actioncable";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.CableApp = {};
    this.CableApp.cable = actionCable.createConsumer(
      "wss://strifeapp.herokuapp.com/cable"
      // "ws://localhost:3000/cable"
    );
  }
  componentDidMount() {
    this.scrollToBottom();
    this.CableApp.messages = this.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: this.props.channel.id,
      },
      {
        connected: () => {},
        received: (message) => {
          //this.props.createMessage(message);
          this.getResponseMessage(message);
        },
        speak: function (message) {
          return this.perform("speak", message);
        },
      }
    );
  }

  getResponseMessage(message) {
    //Make sure not to display own message in chat logs
    const response = JSON.parse(message.json);
    if (this.props.user.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
  }

  scrollToBottom() {
    // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    // this.scrollToBottom();
  }

  render() {
    const messages = this.props.messages;

    return (
      <div className="message-list">
        <div className="message-ul">
          {messages.map((message) => (
            <div key={message.id} className="message-li">
              <div className="msg-username">{message.author.username}</div>
              <div className="user-msg">{message.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Messages;
