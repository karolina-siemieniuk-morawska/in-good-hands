import React from "react";
import { Link } from "react-router-dom";
import UpperMenu from "../1_Header/UpperMenu/index";
import LowerMenu from "../1_Header/LowerMenu/index";
import Button from "../../Elements/Button/index";
import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header_content">
        <UpperMenu />
        <LowerMenu />
        <h1 className="title">
          Start helping!
          <br /> Donate unwanted things in good hands
        </h1>
        <div className="buttons">
          <Link to="/login">
            <Button content="Donate things" />
          </Link>
          <Link to="/login">
            <Button content="Organize collection" />
          </Link>
        </div>
      </div>
    </div>
  );
}
