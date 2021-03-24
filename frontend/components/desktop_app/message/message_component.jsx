import React from "react";
import MessageForm from "./message_form";
import Messages from "./messages";

class MessageComponent extends React.Component {
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
