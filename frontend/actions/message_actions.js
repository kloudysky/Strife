import * as APIUtil from "../util/message_api_util";

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveAllMessages = (messages) => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  messages,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors,
});

export const requestMessages = (channelId) => (dispatch) =>
  APIUtil.requestChannelMessages(channelId)
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

const responseAllOk = (response) => {
  if (!response.ok) {
    return response.json().then((errors) => dispatch(receiveErrors(errors)));
  } else {
    return response
      .json()
      .then((messages) => dispatch(receiveAllMessages(messages)));
  }
};