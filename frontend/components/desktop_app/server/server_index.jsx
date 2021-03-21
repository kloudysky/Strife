import React from "react";
import Server from "./server";
import { Link } from "react-router-dom";

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
  }

  activateHome() {
    this.props.requestDMChannels();
    this.props.setActiveServer({
      id: -1,
    });
  }

  render() {
    const servers = this.props.servers;

    return (
      <div className="server-component">
        <ul className="server-list">
          <li className="server-list-item" onClick={() => this.activateHome()}>
            DM
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
                key={server.id}
                onClick={() => this.activateServer(server)}
              >
                {server.icon ? `<img src='${server.icon}/>` : serverName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ServerIndex;
