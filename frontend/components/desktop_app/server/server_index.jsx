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
    if (server.channels.length) {
      this.props.setActiveChannel(server.channels[0]);
      this.props.requestMessages(server.channels[0].id);
    }

    this.props.setActiveServer(server);
    console.log(server.channels[0]);

    this.setState({ activeLink: server.id });
  }

  activateHome() {
    this.props.requestDMChannels();
    this.props.setActiveServer({
      id: -1,
    });
    this.props.setActiveChannel(this.props.activeDMChannel);
  }

  render() {
    const activeServer = this.props.activeServer;
    const activeClass =
      activeServer.id === null || activeServer.id === -1
        ? "active-server-shape"
        : "server-list-hover-shape";

    return (
      <div className="server-component">
        <div className="scroller"></div>
        <div className="list-item" key="list-item1">
          <div
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
          </div>
        </div>
        <div className="list-item" key="list-item2">
          <div className="server-list-br"></div>
        </div>
        {this.generateServerItem()}
        <div className="list-item" key="list-item3">
          <div
            className="server-list-item server-list-icon"
            onClick={() => this.props.setCreateServerModalState(true)}
          >
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="list-item" key="list-item4">
          <div className="server-list-item server-list-icon">
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-compass"></i>
          </div>
        </div>
        <div className="list-item" key="list-item5">
          <div className="server-list-br"></div>
        </div>
        <div className="list-item" key="list-item6">
          <div className="server-list-item server-list-icon">
            <div className="server-list-hover-shape"></div>
            <i className="fas fa-download"></i>
          </div>
        </div>
      </div>
    );
  }

  activeServer() {
    return <div key="active" className="active-server"></div>;
  }

  generateServerItem() {
    {
      const servers = this.props.servers;
      const activeServer = this.props.activeServer;
      return servers.map((server) => {
        let serverName;
        if (server.server_name.trim().indexOf(" ") != -1) {
          const titleWords = server.server_name.split(" ");
          serverName = titleWords[0][0] + titleWords[1][0];
        } else {
          serverName = server.server_name[0];
        }
        return (
          <div className="list-item">
            <div
              className="server-list-item"
              id={activeServer.id === server.id ? "active-server-item" : ""}
              key={server.id}
              onClick={() => this.activateServer(server)}
            >
              {/* <div className="server-list-hover-shape"></div> */}
              <div
                key={activeServer.id}
                className={
                  activeServer.id === server.id
                    ? "active-server-shape"
                    : "server-list-hover-shape"
                }
              ></div>
              {server.icon ? <img src={`${server.icon}`} /> : serverName}
            </div>
          </div>
        );
      });
    }
  }
}

export default ServerIndex;
