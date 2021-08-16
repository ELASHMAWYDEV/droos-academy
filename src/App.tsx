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

//Teacher dashboard routes
import { AddExam, AddLecture } from "teacher-dashboard/routes";

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
      {subdomain === "student" && <Switch></Switch>}
      {subdomain === "teacher" && (
        <Switch>
          <Route path="/add-lecture" component={AddLecture} />
          <Route path="/add-exam" component={AddExam} />
        </Switch>
      )}
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
