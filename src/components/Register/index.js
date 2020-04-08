import React from "react";
import { Link } from "react-router-dom";
import "../Login/style.scss";
import LowerMenu from "../Home/1_Header/LowerMenu/index";
import UpperMenu from "../Home/1_Header/UpperMenu/index";
import Title from "../Elements/Title/index";
import Button from "../Elements/Button/index";

export default function Register() {
  return (
    <div className="container login">
      <UpperMenu />
      <LowerMenu />
      <div className="register_content">
        <Title content="Register" />
        <form>
          <label>
            E-mail
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <label>
            Repeat password
            <input type="password" name="password" />
          </label>
        </form>
      </div>
      <div className="login_buttons">
        <Link to="/login">
          <Button content="Sign in" className="small_button" />
        </Link>
        <Button content="Register" className="small_button" />
      </div>
    </div>
  );
}
