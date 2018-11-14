import React, { Component } from "react";
import LoginForm from "./forms/LoginForm";

class LogIn extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LogIn;
