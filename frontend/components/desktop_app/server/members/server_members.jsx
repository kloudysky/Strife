import React from "react";

class ServerMembers extends React.Component {
  render() {
    // return <div className="server-members-container">{this.mapMembers()}</div>;
    return this.mapMembers();
  }

  mapMembers() {
    const members = this.props.activeServer.members;
    if (this.props.activeServer && this.props.activeServer.id > 0) {
      members.sort((a, b) => {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      });
      return (
        <div className="server-members-container">
          <div className="member-ul">
            <div className="online-status">ONLINE-{`${members.length}`}</div>
            {members.map((member) => (
              <div key={member.id} className="member-li">
                <div className="member-avatar">
                  <img className="member-avatar-img" src={`${member.avatar}`} />
                </div>
                <div className="member-username">{member.username}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ServerMembers;
