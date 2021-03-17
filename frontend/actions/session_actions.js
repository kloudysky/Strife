import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
  .then(responseOk)
  .catch((error) => {
    console.log(error.statusText);
  });

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
  .then(responseOk)
  .catch((error) => {
    console.log(error.statusText);
  });

export const logout = () => (dispatch) =>
  APIUtil.logout()
  .then((response) => response.json())
  .then((user) => dispatch(logoutCurrentUser()));

const responseOk = response => {
  if (!response.ok) {
    return response.json().then(error => dispatch(receiveErrors(error)))
  } else {
    return response.json().then(user => dispatch(receiveCurrentUser(user)))
  }
};