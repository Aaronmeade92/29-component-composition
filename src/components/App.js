import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/">Landing</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </nav>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
