import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = ["/enterTips", "/dashboard", "/profile"];

  return (
    <div className="container-nav">
      <ul className="nav">
        {links &&
          links.map((link, index) => (
            <li className="nav-link" key={index}>
              <NavLink className="nav-text" to={link}>
                {link === "/enterTips"
                  ? link.replace("/", "").replace("T", " T")
                  : link.replace("/", "")}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Navbar;
