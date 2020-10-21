import React, { Component } from "react";

import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div class="card center">
        <div class="card-body">
          <form>
            <div class="form-group">
              <h1>Login</h1>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
