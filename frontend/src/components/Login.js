import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      redirectToDashboard: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "", open: false });
    this.setState({ [name]: event.target.value });
  };

  login = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", "admin");

      this.setState({ redirectToDashboard: true });
    } else alert("Incorrect Username or Password");
  };

  render() {
    const { email, password, redirectToDashboard } = this.state;

    if (redirectToDashboard) return <Redirect to="/dashboard" />;

    return (
      <div className="card center">
        <div className="card-body">
          <form>
            <div className="form-group">
              <h1>Login</h1>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={this.handleChange("email")}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handleChange("password")}
                value={password}
              />
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
