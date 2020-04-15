import React from "react";
import { Link } from "react-scroll";
import "./style.scss";
import { Hamburger } from "./Hamburger";
// import { NavLink } from "react-router-dom";

export default function LowerMenu() {
  return (
    <nav>
      {window.matchMedia("(max-width: 750px)").matches && <Hamburger />}
      <ul className="lower_menu" hidden>
        <li>
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Start
          </Link>
        </li>
        <li>
          <Link to="simple_steps" spy={true} smooth={true} duration={500}>
            Description
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="organizations" spy={true} smooth={true} duration={500}>
            Foundations and Organizations
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
