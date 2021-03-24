import * as APIUtil from "../util/server_api_util";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_ALL_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

export const receiveAllServers = (servers) => ({
  type: RECEIVE_ALL_SERVERS,
  servers,
});

export const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server,
});

export const deleteServer = (serverId) => ({
  type: DELETE_SERVER,
  serverId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors,
});

export const createServer = (server) => (dispatch) =>
  APIUtil.createServer(server)
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestServers = () => (dispatch) =>
  APIUtil.requestServers()
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestServer = (serverId) => (dispatch) =>
  APIUtil.requestServer(serverId)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const removeServer = (serverId) => (dispatch) =>
  APIUtil.deleteServer(serverId)
    .then((response) => response.json())
    .then(() => dispatch(deleteServer(serverId)))
    .catch((error) => {
      console.log(error.statusText);
    });

export const updateServer = (server) => (dispatch) =>
  APIUtil.updateServer(server)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const addServerMember = (serverMember) => (dispatch) =>
  APIUtil.addServerMember(serverMember)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

const responseAllOk = (response) => {
  if (!response.ok) {
    console.log(response);
    return response.json().then((error) => dispatch(receiveErrors(error)));
  } else {
    return response
      .json()
      .then((servers) => dispatch(receiveAllServers(servers)));
  }
};

const responseOk = (response) => {
  if (!response.ok) {
    console.log(response);
    return response.json().then((error) => dispatch(receiveErrors(error)));
  } else {
    return response.json().then((server) => dispatch(receiveServer(server)));
  }
};
