import * as APIUtil from "../util/search_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const requestUsers = (username) => (dispatch) =>
  APIUtil.requestUsers(username)
    .then(responseAllOk)
    .catch((error) => {
      console.log(error.statusText);
    });

const responseAllOk = (response) => {
  if (!response.ok) {
    console.log(response);
    return response.json().then((error) => dispatch(receiveErrors(error)));
  } else {
    return response.json().then((users) => dispatch(receiveUsers(users)));
  }
};
