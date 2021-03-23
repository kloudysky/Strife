import React from "react";
class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestServers();
  }

  activateServer(server) {
    this.props.requestServerChannels(server.id);
    this.props.setActiveServer(server);
    this.setState({ activeLink: server.id });
  }

  activateHome() {
    this.props.requestDMChannels();
    this.props.setActiveServer({
      id: -1,
    });
  }

  activeServer() {
    return <div className="active-server"></div>;
  }

  render() {
    const servers = this.props.servers;
    const activeServer = this.props.activeServer;
    const activeClass =
      activeServer.id === null || activeServer.id === -1
        ? "active-server-shape"
        : "server-list-hover-shape";

    return (
      <div className="server-component">
        <ul className="server-list">
          <li
            className="server-list-item server-home-btn"
            id={
              activeServer.id === null || activeServer.id === -1
                ? "active-server-item"
                : ""
            }
            onClick={() => this.activateHome()}
          >
            <div className={activeClass}></div>
            <i className="fas fa-gamepad"></i>
          </li>
          <div className="server-list-br"></div>
          {servers.map((server) => {
            let serverName;
            if (server.server_name.trim().indexOf(" ") != -1) {
              const titleWords = server.server_name.split(" ");
              serverName = titleWords[0][0] + titleWords[1][0];
            } else {
              serverName = server.server_name[0];
            }
            return (
              <li
                className="server-list-item"
                id={activeServer.id === server.id ? "active-server-item" : ""}
                key={server.id}
                onClick={() => this.activateServer(server)}
              >
                {/* <div className="server-list-hover-shape"></div> */}
                <div
                  className={
                    activeServer.id === server.id
                      ? "active-server-shape"
                      : "server-list-hover-shape"
                  }
                ></div>
                {server.icon ? `<img src='${server.icon}/>` : serverName}
              </li>
            );
          })}
          <li
            className="server-list-item server-list-icon"
            onClick={() => this.props.setCreateServerModalState(true)}
          >
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-plus"></i>
          </li>
          <li className="server-list-item server-list-icon">
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-compass"></i>
          </li>
          <div className="server-list-br"></div>
          <li className="server-list-item server-list-icon">
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-download"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default ServerIndex;
