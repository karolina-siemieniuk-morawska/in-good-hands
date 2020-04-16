import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.scss";
import UpperMenu from "../Home/1_Header/UpperMenu/index";
import Title from "../Elements/Title/index";
import Button from "../Elements/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faHome} />;

export default function Login() {
  const { register, handleSubmit, errors } = useForm();

  const toMainPage = () => {
    window.location.href = "/";
  };

  return (
    <div className="container login">
      <UpperMenu />
      <Button
        content={element}
        className="home_button"
        handleClick={toMainPage}
      />

      <div className="login_content">
        <Title content="Sign in" />

        <form onSubmit={handleSubmit(toMainPage)}>
          <div className="form">
            <label>
              E-mail
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p>E-mail is required!</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p>Invalid e-mail address!</p>
              )}
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                ref={register({ required: true, minLength: 7 })}
              />
              {errors.password && (
                <p>Password must be longer than 6 characters!</p>
              )}
            </label>
          </div>

          <div className="login_buttons">
            <Link to="/register">
              <Button content="Register" className="small_button" />
            </Link>
            <Button content="Sign in" className="small_button" />
          </div>
        </form>
      </div>
    </div>
  );
}
