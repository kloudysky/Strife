import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import * as api from './util/session_api_util'
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
  store = configureStore();
}
  // const store = configureStore();
  // TESTING START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // TESTING END
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// window.login = api.login
// window.signup = api.signup
// window.logout = api.logout