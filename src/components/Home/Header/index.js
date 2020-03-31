import React from "react";
import UpperMenu from "../Header/UpperMenu/index";
import LowerMenu from "../Header/LowerMenu/index";
import Button from "../Button/index";
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
          <Button content="Donate things" />
          <Button content="Organize collection" />
        </div>
      </div>
    </div>
  );
}
