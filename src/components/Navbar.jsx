import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="container-nav"
      style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
    >
      <ul className="nav">
        <li className="nav-link">
          <NavLink className="nav-text" to="/enterTips">
            enter tips
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="nav-text" to="/dashboard">
            dashboard
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="nav-text" to="/profile">
            profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
