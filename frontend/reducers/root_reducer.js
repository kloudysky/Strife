import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";

const appReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_CURRENT_USER") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
