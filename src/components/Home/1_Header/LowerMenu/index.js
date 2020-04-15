import React from "react";
import { Link } from "react-scroll";
import "./style.scss";
import { Hamburger } from "./Hamburger";
// import { NavLink } from "react-router-dom";

export default function LowerMenu() {
  const klik = (e) => {
    e.target.parentNode.parentNode.classList.remove("visible_menu");
  };

  return (
    <nav>
      <Hamburger />
      <ul className="lower_menu">
        <li>
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={klik}
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            to="simple_steps"
            spy={true}
            smooth={true}
            duration={500}
            onClick={klik}
          >
            Description
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={klik}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="organizations"
            spy={true}
            smooth={true}
            duration={500}
            onClick={klik}
          >
            Foundations and Organizations
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={klik}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
