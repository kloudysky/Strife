import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;

    return (
      <div>
        <div>
          <ul>
            {messages.map((message) => (
              <li>
                {message.author.username}:{message.content}
              </li>
            ))}
          </ul>
        </div>
        <form id="message-form" action="">
          <input id="input" autoComplete="off" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
