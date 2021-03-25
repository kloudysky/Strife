import React from "react";
import MessageForm from "./message_form";
import Messages from "./messages";
import actionCable from "actioncable";
class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.CableApp = {};
    this.CableApp.cable = actionCable.createConsumer(
      "wss://strifeapp.herokuapp.com/cable"
      // "ws://localhost:3000/cable"
    );
  }

  componentDidMount() {
    console.log(this.CableApp);
    this.CableApp.messages = this.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: this.props.activeChannel.id,
      },
      {
        received: (messages) => {
          console.log(messages);
          this.props.receiveMessage(messages);
        },
      }
    );
  }

  render() {
    const channel = this.props.activeChannel;
    const messages = this.props.messages;
    const messageComponent = (
      <div>
        <Messages messages={messages} />
        <MessageForm
          sendMessage={this.props.sendMessage}
          channel={channel}
          user={this.props.currentUser}
        />
      </div>
    );
    return (
      <div className="message-container">
        {channel.id !== -1 ? messageComponent : "HOME"}
      </div>
    );
  }
}

export default MessageComponent;
