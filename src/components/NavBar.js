import React from "react";
import "./NavBar.css";
import Logo from "../../src/software.jpg";
//import Session from "./Session";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const navBar = (props) => {
  return (
    <div className="Nav">
      <img style={{ width: "100%" }} src={Logo} alt="Logo" />

      <div className="NavList">
        <Switch>
          <Link to="/Dashboard" style={{ color: "white" }}>
            Dashboard
          </Link>
        </Switch>
      </div>
      <div className="NavList">
        <Switch>
          <Link to="/Session" style={{ color: "white" }}>
            Session
          </Link>
        </Switch>
      </div>
      <div className="NavList">
        <Switch>
          <Link to="/Files" style={{ color: "white" }}>
            Files
          </Link>
        </Switch>
      </div>
      <div
        style={{ paddingTop: "50px", color: "white", paddingBottom: "70px" }}
      >
        <Switch>
          <Link to="/Messages" style={{ color: "white" }}>
            Messages
          </Link>
        </Switch>
      </div>
    </div>
  );
};

export default navBar;
