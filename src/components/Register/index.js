import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Login/style.scss";
import UpperMenu from "../Home/1_Header/UpperMenu/index";
import Title from "../Elements/Title/index";
import Button from "../Elements/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faHome} />;

export default function Register() {
  const { register, handleSubmit, getValues, errors } = useForm();

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

      <div className="register_content">
        <Title content="Register" />

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
                id="password1"
                type="password"
                name="password1"
                ref={register({ required: true, minLength: 7 })}
              />
              {errors.password1 && (
                <p>Password must be longer than 6 characters!</p>
              )}
            </label>
            <label>
              Repeat password
              <input
                id="password2"
                type="password"
                name="password2"
                ref={register({
                  required: true,
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password1 } = getValues();
                      return (
                        password1 === value ||
                        "Both passwords must be the same!"
                      );
                    },
                  },
                })}
              />
              {errors.password2 && <p>{errors.password2.message}</p>}
            </label>
          </div>

          <div className="login_buttons">
            <Link to="/login">
              <Button content="Sign in" className="small_button" />
            </Link>
            <Button content="Register" className="small_button" />
          </div>
        </form>
      </div>
    </div>
  );
}
