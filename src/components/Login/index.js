import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import LowerMenu from "../Home/1_Header/LowerMenu/index";
import UpperMenu from "../Home/1_Header/UpperMenu/index";
import Title from "../Elements/Title/index";
import Button from "../Elements/Button/index";

export default function Login() {
  return (
    <div className="container login">
      <UpperMenu />
      <LowerMenu />
      <div className="login_content">
        <Title content="Sign in" />
        <form>
          <label>
            E-mail
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
        </form>
      </div>
      <div className="login_buttons">
        <Link to="/register">
          <Button content="Register" className="small_button" />
        </Link>
        <Button content="Sign in" className="small_button" />
      </div>
    </div>
  );
}
