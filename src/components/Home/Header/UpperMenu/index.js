import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function UpperMenu() {
  return (
    <nav>
      <ul className="upper_menu">
        <li>
          <NavLink activeClassName="active-upper" to="/login">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-upper" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
