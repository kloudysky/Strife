import React from "react";

class StrifeNavBar extends React.Component {
  render() {
    const channel = this.props.activeChannel;
    return <div className="strife-nav-bar">{this.navLocation()}</div>;
  }

  navLocation() {
    const channel = this.props.activeChannel;
    if (channel.id === -1) {
      return this.homeNav();
    } else if (channel.channel_type > 0) {
      return this.dmNav(channel);
    } else {
      return this.serverNav(channel);
    }
  }

  homeNav() {
    return (
      <>
        <div className="home-main-nav-icons">
          <div className="home-nav-icon home-nav-friends-icon">
            <i className="fas fa-user-friends friend-nav-icon"></i>Friends
          </div>
          <div className="home-nav-br"></div>
          <div className="home-nav-icon">Online</div>
          <div className="home-nav-icon">All</div>
          <div className="home-nav-icon">Pending</div>
          <div className="home-nav-icon">Blocked</div>
          <div className="home-nav-icon add-friend-btn">Add Friend</div>
        </div>
        <div className="friends-nav-inbox">
          <i className="fas fa-comments nav-icon"></i>
          <div className="home-nav-br"></div>
          <i className="fas fa-inbox nav-icon"></i>
          <i className="fas fa-question-circle nav-icon"></i>
        </div>
      </>
    );
  }

  dmNav(channel) {
    let channel_name;
    if (channel.members.length === 2) {
      const channel_member = channel.members.filter(
        (member) => member.username !== this.props.currentUser.username
      );
      channel_name = channel_member[0].username;
    } else {
      channel_name = channel.channel_name;
    }
    return (
      <div className="home-nav">
        <div className="at-user">
          <i className="fas fa-at at-nav-icon"></i>
          <h3 className="nav-icon user-header">{`${channel_name}`}</h3>
        </div>
        <div className="all-nav-icons">
          <div className="main-nav-icons">
            <i className="fas fa-phone nav-icon"></i>
            <i className="fas fa-video nav-icon"></i>
            <i className="fas fa-thumbtack nav-icon"></i>
            <i className="fas fa-user-plus nav-icon"></i>
          </div>
          <input className="search-bar-nav" type="text" placeholder="Search" />
          <div className="home-nav-inbox">
            <i className="fas fa-inbox nav-icon"></i>
            <i className="fas fa-question-circle nav-icon"></i>
          </div>
        </div>
      </div>
    );
  }

  serverNav(channel) {
    return (
      <div className="home-nav">
        <div className="at-user">
          <i className="fas fa-hashtag at-nav-icon"></i>
          <h3 className="nav-icon user-header">{`${channel.channel_name}`}</h3>
        </div>
        <div className="all-nav-icons">
          <div className="main-nav-icons">
            <i className="fas fa-bell nav-icon"></i>
            <i className="fas fa-thumbtack nav-icon"></i>
            <i className="fas fa-user-friends nav-icon"></i>
          </div>
          <input className="search-bar-nav" type="text" placeholder="Search" />
          <div className="home-nav-inbox">
            <i className="fas fa-inbox nav-icon"></i>
            <i className="fas fa-question-circle nav-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default StrifeNavBar;
