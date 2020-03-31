import React from "react";
import { Link } from "react-router-dom";
import Steps from "./Steps/index";
import Title from "../Title/index";
import Button from "../Button/index";
import "./style.scss";

export default function SimpleSteps() {
  return (
    <div id="simple_steps" className="simple_steps">
      <Title content="Donate in 4 simple steps" />
      <Steps />
      <Link to="/login">
        <Button content="Donate things" />
      </Link>
    </div>
  );
}
