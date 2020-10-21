import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      redirectToLogin: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== "admin") this.setState({ redirectToLogin: true });
  }
  render() {
    const { redirectToLogin } = this.state;

    if (redirectToLogin) return <Redirect to="/" />;

    return <div>Dashboard</div>;
  }
}
