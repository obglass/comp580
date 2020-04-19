import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" id="navbar">
      <NavLink id="nav" to="/">
        Home
      </NavLink>
      <NavLink id="nav" to="/table">
        Table
      </NavLink>
      <NavLink id="nav" to="/missingnumbergame">
        Missing Number Game
      </NavLink>
      <NavLink id="nav" to="/completetablegame">
        Complete the Table Game
      </NavLink>
    </Navbar>
  );
};

export default Navigation;
