import React from "react";
import actionCable from "actioncable";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentWillUnmount() {
    console.log("UUNSUB");
  }

  getResponseMessage(message) {
    const response = JSON.parse(message.json);
    if (this.props.user.id !== response.author.id) {
      this.props.receiveMessage(response);
    }
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView({ block: "nearest" });
  }

  render() {
    const messages = this.props.messages;
    const channel = this.props.channel;

    return (
      <div className="message-list">
        <div className="message-ul">
          {channel.channel_type > 0
            ? this.welcomeDMMessage(channel)
            : this.welcomeMessage(channel)}
          {messages.map((message) => (
            <div key={message.id} className="message-li">
              <div
                className="author-avatar"
                style={{ backgroundImage: `url(${message.author.avatar})` }}
              >
                {/* <img className="avatar-img" src={`${message.author.avatar}`} /> */}
              </div>
              <div className="content-area">
                <div className="msg-username">
                  {message.author.username}
                  <div className="timestamp">
                    {`${this.timeSince(Date.parse(message.created_at))} ago`}
                  </div>
                </div>
                <div className="user-msg">{message.content}</div>
              </div>
            </div>
          ))}
          <div ref={this.bottom} id="spacer" />
        </div>
      </div>
    );
  }

  welcomeDMMessage(channel) {
    return (
      <div className="channel-welcome">
        <div
          className={` ${
            channel.members.length > 2
              ? "multi-img-container-1"
              : "welcome-img-contianer"
          }`}
        >
          {channel.members.length > 2
            ? this.getMultipleUserImgs(channel.members)
            : ""}
          <img
            className="welcome-img"
            src={
              channel.members.length === 2
                ? `${this.getOtherUsersImg(channel.members)}`
                : ""
            }
            alt=""
          />
        </div>
        <h1 className="welcome-header">{channel.channel_name}</h1>
        <p className="welcome-text">
          This is the beginning of your bond history with{" "}
          {channel.members.map((member) => `@${member.username} `)}
        </p>
        <hr className="welcome-hr" />
      </div>
    );
  }

  getMultipleUserImgs(members) {
    return members.map((member) => (
      <div className="multi-img-container">
        <img className="welcome-img" src={`${member.avatar}`} alt="" />
      </div>
    ));
  }

  getOtherUsersImg(members) {
    let userImgUrl;
    members.forEach((member) => {
      if (member.id !== this.props.user.id) {
        userImgUrl = member.avatar;
      }
    });
    return userImgUrl;
  }

  welcomeMessage(channel) {
    return (
      <div className="channel-welcome">
        <div className="welcome-img-contianer">
          <img src="" alt="" />
        </div>
        <h1 className="welcome-header">Welcome to #{channel.channel_name}!</h1>
        <p className="welcome-text">
          This is the beginning of your {channel.channel_name} conversations.
        </p>
        <hr className="welcome-hr" />
      </div>
    );
  }

  timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
}

export default Messages;
