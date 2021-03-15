import React from "react";
import ReactDOM from "react-dom";
import * as api from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Strife App</h1>, root);
});

window.login = api.login
window.signup = api.signup
