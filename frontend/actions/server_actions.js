import * as APIUtil from "../util/server_api_util";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";
export const LEAVE_SERVER = "LEAVE_SERVER";
export const JOIN_SERVER = "JOIN_SERVER";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS";

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

export const clearErrors = () => ({
  type: CLEAR_SERVER_ERRORS,
});

export const receiveMembers = (server) => ({
  type: RECEIVE_MEMBERS,
  server,
});

export const createServer = (server) => (dispatch) =>
  APIUtil.createServer(server)
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const joinServer = (inviteCode) => (dispatch) =>
  APIUtil.joinServer(inviteCode)
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

export const leaveServer = (serverId) => (dispatch) =>
  APIUtil.leaveServer(serverId)
    .then((response) => response.json())
    .then(() => dispatch(deleteServer(serverId)))
    .catch((error) => {
      console.log(error.statusText);
    });

export const updateServer = (server) => (dispatch) =>
  APIUtil.updateServer(server)
    .then(receiveMessage)
    .catch((error) => {
      console.log(error.statusText);
    });

export const addServerMember = (serverMember) => (dispatch) =>
  APIUtil.addServerMember(serverMember)
    .then(responseAllOk)
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

const receiveMessage = (response) => {
  if (!response.ok) {
    console.log(response);
    return response.json().then((error) => dispatch(receiveErrors(error)));
  } else {
    return response.json().then((message) => dispatch(receiveErrors(message)));
  }
};
