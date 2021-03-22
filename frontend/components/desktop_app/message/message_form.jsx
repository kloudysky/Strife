import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form id="message-form" action="">
          <input id="input" autoComplete="off" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
