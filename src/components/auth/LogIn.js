import React, { Component } from "react";
import LoginForm from "./forms/LoginForm";

class LogIn extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm />
      </div>
    );
  }
}

export default LogIn;
