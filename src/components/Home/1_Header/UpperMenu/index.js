import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function UpperMenu() {
  return (
    <nav>
      <ul className="upper_menu">
        <NavLink activeClassName="active-upper" to="/login">
          <li>Sign In</li>
        </NavLink>
        <NavLink activeClassName="active-upper" to="/register">
          <li>Register</li>
        </NavLink>
      </ul>
    </nav>
  );
}
