import React from "react";
import SplashContainer from "./splash/splash_container";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import DesktopAppContainer from "./desktop_app/desktop_app_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/channels" component={DesktopAppContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={SplashContainer} />
  </Switch>
);

export default App;
