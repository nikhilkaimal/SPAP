import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Academic from "./components/Academic";
import Dashboard from "./components/Dashboard";

const App = () => (
  <BrowserRouter>
    <Switch>
    
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/academic" component={Academic} />
     
      <Route exact path="/dashboard" component={Dashboard} />
  
    </Switch>
  </BrowserRouter>
);

export default App;
