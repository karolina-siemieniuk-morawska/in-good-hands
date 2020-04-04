import React from "react";
import { Link } from "react-scroll";
import "./style.scss";

export default function LowerMenu() {
  return (
    <nav>
      <ul className="lower_menu">
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
