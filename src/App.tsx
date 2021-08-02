import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Hooks
import { useBootstrap } from "./hooks";
import { LandingPage, Login, SignUp, StudentPage, TeacherPage } from "platform/routes";

const App = () => {
  const { subdomain } = useBootstrap();

  return (
    <Router>
      {subdomain === "" && (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:type/login" component={Login} />
          <Route exact path="/:type/sign-up" component={SignUp} />
          <Route exact path="/student" component={StudentPage} />
          <Route exact path="/teacher" component={TeacherPage} />
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
