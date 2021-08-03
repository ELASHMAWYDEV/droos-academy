import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Hooks
import { useBootstrap } from "./hooks";

//PLatform Routes
import {
  HomePage,
  Login,
  SignUp,
  StudentPage,
  TeacherPage,
} from "platform/routes";

//Teacher Routes
import { Home } from "teacher/routes";

const App = () => {
  const { subdomain } = useBootstrap();

  return (
    <Router>
      {subdomain === "" && (
        <Switch>
          <Route exact path="/" component={HomePage} />
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
        subdomain !== "student" && (
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        )}
    </Router>
  );
};

export default App;
