import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    const channel = this.props.channel;
    this.state = {
      author_id: this.props.user.id,
      channel_id: channel.id,
      channel_name: channel.channel_name,
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const msg = {
      channel_id: this.state.channel_id,
      content: this.state.message,
      author_id: this.state.author_id,
    };
    this.props.sendMessage(msg);
    //App.cable.subscriptions.subscriptions[0].speak(msg);
    this.setState({ message: "" });
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit} id="message-form">
          <input
            className="msg-input"
            autoComplete="off"
            placeholder={`Message #${this.state.channel_name}`}
            value={this.state.message}
            onChange={this.update("message")}
          />
          <input className="msg-submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
