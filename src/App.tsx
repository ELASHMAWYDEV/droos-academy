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
import {
  MyLectures as StudentLectures,
  MyTeachers as StudentTeachers,
  MyProfile as StudentProfile,
  AddCredit as StudentPayment,
} from "student-dashboard/routes";

//Student-Dashboard Components
import {
  Header as StudentHeader,
  Footer as StudentFooter,
} from "student-dashboard/components";

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
          <>
            <StudentHeader />
            <Route exact path="/" component={StudentLectures} />
            <Route exact path="/teachers" component={StudentTeachers} />
            <Route exact path="/profile" component={StudentProfile} />
            <Route exact path="/add-credit" component={StudentPayment} />
            <StudentFooter />
          </>
        </Switch>
      )}
      {subdomain === "teacher" && <Switch></Switch>}
      {subdomain !== "" &&
        subdomain !== "admin" &&
        subdomain !== "teacher" &&
        subdomain !== "student" && (
          <Switch>
            <Route exact path="/" component={TeacherHome} />
          </Switch>
        )}
    </Router>
  );
};

export default App;
