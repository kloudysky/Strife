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
    let channel_name;
    if (channel.members.length === 2) {
      const channel_member = channel.members.filter(
        (member) => member.username !== this.props.user.username
      );
      channel_name = channel_member[0].username;
    } else {
      channel_name = channel.channel_name;
    }
    console.log(this.getChannelMemberNames(channel.members));
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
        <h1 className="welcome-header">{channel_name}</h1>
        <p className="welcome-text">
          This is the beginning of your bond history with{" "}
          {this.getChannelMemberNames(channel.members).map(
            (member) => `@${member.username} `
          )}
        </p>
        <hr className="welcome-hr" />
      </div>
    );
  }

  getChannelMemberNames(members) {
    return members.filter(
      (member) => member.username !== this.props.user.username
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
    if (typeof date !== "object") {
      date = new Date(date);
    }

    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = "year";
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = "month";
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = "day";
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }

    if (interval > 1 || interval === 0) {
      intervalType += "s";
    }

    return interval + " " + intervalType;
  }
}

export default Messages;
