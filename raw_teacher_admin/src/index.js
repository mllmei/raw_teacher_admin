import React from "react";
import ReactDOM from "react-dom";
import System from "./system.js";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import Attendance from "./attendance.js";
import Courses from "./courses.js";
import Teacher from "./teacher.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={System} />
        <Route path="/attendance" component={Attendance} />
        <Route path="/courses" component={Courses} />
        <Route path="/teacher" component={Teacher} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
