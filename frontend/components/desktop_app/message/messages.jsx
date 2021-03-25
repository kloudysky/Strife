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
    console.log(this.props.channel);
    console.log(this.CableApp);
    this.CableApp.messages = this.CableApp.cable.subscriptions.create(
      {
        channel: "ChannelChannel",
        id: this.props.channel.id,
      },
      {
        connected: () => {
          console.log("CONNECTED");
        },
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
    console.log(this.props.user.id);
    const response = JSON.parse(message.json);
    console.log(response.author.username);
    console.log(response);
    if (this.props.user.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
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
