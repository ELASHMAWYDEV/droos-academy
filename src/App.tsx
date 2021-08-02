import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Hooks
import { useBootstrap } from "./hooks";
import { Login } from "platform/routes";

const App = () => {
  const { subdomain } = useBootstrap();

  return (
    <Router>
      {subdomain === "" && (
        <Switch>
          <Route exact path="/" component={() => <div>Hello</div>} />
          <Route exact path="/:type/login" component={Login} />
        </Switch>
      )}
      {subdomain === "admin" && <Switch></Switch>}
      {subdomain === "student" && <Switch></Switch>}
      {subdomain === "teacher" && <Switch></Switch>}
      {subdomain !== "" &&
        subdomain !== "admin" &&
        subdomain !== "teacher" &&
        subdomain !== "student" && <Switch></Switch>}
    </Router>
  );
};

export default App;
