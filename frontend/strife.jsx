import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          currentUser: window.currentUser,
        },
      },
      session: {
        id: window.currentUser.id,
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // const store = configureStore();
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// window.getChannels = actions.requestChannels;
// window.createChannel = actions.createChannel;
