import React, { Component } from "react";
export default class System extends Component {
  state = {
    flag: "admin"
  };
  admin = () => {
    this.setState({ flag: "admin" });
  };
  teacher = () => {
    this.setState({ flag: "teacher" });
  };
  render() {
    return (
      <div>
        <h className="school">School</h>
        <button
          className="button"
          onClick={() => {
            this.admin();
          }}
        >
          I am Admin
        </button>
        <button
          className="button"
          onClick={() => {
            this.teacher();
          }}
        >
          I am Teacher
        </button>

        <div
          className="Attendance"
          onClick={() => {
            this.props.history.push("/attendance");
          }}
        >
          Attendance
        </div>
        <div
          className="Courses"
          onClick={() => {
            this.props.history.push("/courses");
          }}
        >
          Courses
        </div>
        <div
          className="Teacher"
          onClick={() => {
            this.state.flag !== "teacher"
              ? this.props.history.push("/teacher")
              : null;
          }}
        >
          Teacher
        </div>
      </div>
    );
  }
}
