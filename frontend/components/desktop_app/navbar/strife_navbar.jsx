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
      <div className="home-nav">
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
    );
  }

  dmNav(channel) {
    return (
      <div className="home-nav">
        <div className="at-user">
          <i class="fas fa-at at-nav-icon"></i>
          <h3 className="nav-icon user-header">{`${channel.channel_name}`}</h3>
        </div>
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
    );
  }

  serverNav(channel) {
    return (
      <div className="home-nav">
        <div className="at-user">
          <i class="fas fa-hashtag at-nav-icon"></i>
          <h3 className="nav-icon user-header">{`${channel.channel_name}`}</h3>
        </div>
        <div className="main-nav-icons">
          <i class="fas fa-bell nav-icon"></i>
          <i className="fas fa-thumbtack nav-icon"></i>
          <i class="fas fa-user-friends nav-icon"></i>
        </div>
        <input className="search-bar-nav" type="text" placeholder="Search" />
        <div className="home-nav-inbox">
          <i className="fas fa-inbox nav-icon"></i>
          <i className="fas fa-question-circle nav-icon"></i>
        </div>
      </div>
    );
  }
}

export default StrifeNavBar;
