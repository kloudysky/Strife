import React from "react";
import ReactDOM from "react-dom";
import * as api from './util/session_api_util'
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Strife App</h1>, root);
});

window.login = api.login
window.signup = api.signup

const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
// when you shouldn't
window.getState = store.getState;
window.dispatch = store.dispatch; // just for testing!