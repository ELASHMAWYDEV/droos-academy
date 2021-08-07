import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Hooks
import { useBootstrap } from "./hooks";

//PLatform Routes
import {
  HomePage as PlatformHome,
  Login as PlatfromLogin,
  SignUp as PlatformSignUp,
  StudentPage as PlatfromStudent,
  TeacherPage as PlatfromTeacher,
} from "platform/routes";

//Teacher Routes
import { Home as TeacherHome } from "teacher/routes";

//Student-Dashboard Routes
import { MyLectures as StudentLectures } from "student-dashboard/routes";

const App = () => {
  const { subdomain } = useBootstrap();

  return (
    <Router>
      {subdomain === "" && (
        <Switch>
          <Route exact path="/" component={PlatformHome} />
          <Route exact path="/:type/login" component={PlatfromLogin} />
          <Route exact path="/:type/sign-up" component={PlatformSignUp} />
          <Route exact path="/student" component={PlatfromStudent} />
          <Route exact path="/teacher" component={PlatfromTeacher} />
        </Switch>
      )}
      {subdomain === "admin" && <Switch></Switch>}
      {subdomain === "student" && (
        <Switch>
          <Route exact  path="/" component={StudentLectures} />
        </Switch>
      )}
      {subdomain === "teacher" && <Switch></Switch>}
      {subdomain !== "" &&
        subdomain !== "admin" &&
        subdomain !== "teacher" &&
        subdomain !== "student" && (
          <Switch>
            <Route path="/" component={TeacherHome} />
          </Switch>
        )}
    </Router>
  );
};

export default App;
