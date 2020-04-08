import React from "react";
import { Link } from "react-router-dom";
import "../Login/style.scss";
import LowerMenu from "../Home/1_Header/LowerMenu/index";
import UpperMenu from "../Home/1_Header/UpperMenu/index";
import Title from "../Elements/Title/index";
import Button from "../Elements/Button/index";

export default function Logout() {
  return (
    <div className="container login">
      <UpperMenu />
      <LowerMenu />
      <div className="login_content">
        <Title content="Successfully signed out!" />
      </div>
      <div className="login_buttons">
        <Link to="/">
          <Button content="Home page" className="small_button" />
        </Link>
      </div>
    </div>
  );
}
