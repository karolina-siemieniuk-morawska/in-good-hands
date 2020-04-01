import React from "react";
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
          <Button content="Donate things" />
          <Button content="Organize collection" />
        </div>
      </div>
    </div>
  );
}
