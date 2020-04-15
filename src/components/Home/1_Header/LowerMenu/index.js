import React from "react";
import { Link } from "react-scroll";
import "./style.scss";
import { Hamburger } from "./Hamburger";
// import { NavLink } from "react-router-dom";

export default function LowerMenu() {
  const hideMenu = (e) => {
    e.target.parentNode.parentNode.classList.remove("visible_menu");
    if (
      window.location.href === "/#/login" ||
      window.location.href === "/#/register"
    ) {
      window.location.href = "/";
    }
  };

  const page = {
    header: "header",
    simple_steps: "simple_steps",
    about: "about",
    organizations: "organizations",
    contact: "contact",
  };

  return (
    <nav>
      <Hamburger />
      <ul className="lower_menu">
        <li>
          <Link
            href="#header"
            to={page.header}
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={hideMenu}
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            to={page.simple_steps}
            spy={true}
            smooth={true}
            duration={500}
            onClick={hideMenu}
          >
            Description
          </Link>
        </li>
        <li>
          <Link
            to={page.about}
            spy={true}
            smooth={true}
            duration={500}
            onClick={hideMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to={page.organizations}
            spy={true}
            smooth={true}
            duration={500}
            onClick={hideMenu}
          >
            Foundations and Organizations
          </Link>
        </li>
        <li>
          <Link
            to={page.contact}
            spy={true}
            smooth={true}
            duration={500}
            onClick={hideMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
