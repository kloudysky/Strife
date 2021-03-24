import React from "react";
import MessageForm from "./message_form";

class Message extends React.Component {
  render() {
    return (
      <div className="message-container">
        <div>
          <MessageForm messages={this.props.messages} />
        </div>
      </div>
    );
  }
}

export default Message;
