import React from "react";
import MessageForm from "./message_form";
import Messages from "./messages";
import actionCable from "actioncable";
class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const channel = this.props.activeChannel;
    const messages = this.props.messages;
    const messageComponent = (
      <div>
        <Messages
          channel={channel}
          messages={messages}
          receiveMessage={this.props.receiveMessage}
          createMessage={this.props.createMessage}
          user={this.props.currentUser}
        />
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