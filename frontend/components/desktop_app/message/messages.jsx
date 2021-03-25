import React from "react";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;

    return (
      <div>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.author.username}:{message.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Messages;
