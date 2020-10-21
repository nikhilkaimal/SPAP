import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
