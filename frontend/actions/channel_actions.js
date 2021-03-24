import * as APIUtil from "../util/channel_api_util";

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_ALL_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

export const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels,
});

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel,
});

export const deleteChannel = (channelId) => ({
  type: DELETE_CHANNEL,
  channelId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors,
});

export const createChannel = (channel) => (dispatch) =>
  APIUtil.createChannel(channel)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestChannels = () => (dispatch) =>
  APIUtil.requestChannels()
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestDMChannels = () => (dispatch) =>
  APIUtil.requestDMChannels()
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestServerChannels = (serverId) => (dispatch) =>
  APIUtil.requestServerChannels(serverId)
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const requestChannel = (channelId) => (dispatch) =>
  APIUtil.requestChannel(channelId)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const removeChannel = (channelId) => (dispatch) =>
  APIUtil.deleteChannel(channelId)
    .then((response) => response.json())
    .then(() => dispatch(deleteChannel(channelId)))
    .catch((error) => {
      console.log(error.statusText);
    });

export const updateChannel = (channel) => (dispatch) =>
  APIUtil.updateChannel(channel)
    .then(responseOk)
    .catch((error) => {
      console.log(error.statusText);
    });

export const addChannelMember = (channelMember) => (dispatch) =>
  APIUtil.addChannelMember(channelMember)
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
      .then((channels) => dispatch(receiveAllChannels(channels)));
  }
};

const responseOk = (response) => {
  if (!response.ok) {
    console.log(response);
    return response.json().then((error) => dispatch(receiveErrors(error)));
  } else {
    return response.json().then((channel) => dispatch(receiveChannel(channel)));
  }
};
