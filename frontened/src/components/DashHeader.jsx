import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "../styles/landing.css";
export const DashHeader = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <h3 className="landing-name">S P L I T T E R</h3>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="float">
          <NavLink to="/login">
            <button className="logoutbtn">Log Out</button>
          </NavLink>

          <img
            className="profile"
            src={require("../images/person-profile.png")}
            alt=""
            srcset=""
          />
          <label htmlFor="">
            <span style={{ color: "white" }}>{props.username}</span>
          </label>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
