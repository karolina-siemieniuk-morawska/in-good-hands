import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Elements/Button/index";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();

  const getInputs = () =>
    new Promise(function (resolve, reject) {
      const inputs = document.querySelectorAll("#input");

      if (inputs.length === 0) {
        reject(new Error("Couldn't find element"));
      }

      resolve(inputs);
    });

  const addSuccessMessage = () => {
    const container = document.querySelector(".contact_content");
    if (!document.querySelector(".success_message")) {
      const success = document.createElement("p");
      success.classList.add("success_message");
      success.innerText = "Message successfully sent!";
      container.appendChild(success);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    addSuccessMessage();
    const inputs = document.querySelectorAll("#input");
    inputs.forEach((input) => (input.value = ""));

    // getInputs()
    //   .then((inputs) => {
    //     console.log(`Here! ${inputs}`);
    //     inputs.forEach((input) => (input.value = ""));
    //   })
    //   .catch(() => {});
  };

  const validateName = (value) => {
    if (value.includes(" ")) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name_email">
        <label>
          Your name:
          <input
            id="input"
            type="text"
            placeholder="John"
            name="name"
            ref={register({ required: true, validate: validateName })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>Name is required!</p>
          )}
          {errors.name && errors.name.type === "validate" && (
            <p>Name mustn't contain spaces!</p>
          )}
        </label>
        <label>
          Your e-mail:
          <input
            id="input"
            type="email"
            placeholder="john@gmail.com"
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
      </div>
      <label>Your message:</label>
      <textarea
        id="input"
        placeholder="Hi! I'd like to ask..."
        name="message"
        ref={register({ required: true, minLength: 12 })}
      ></textarea>
      {errors.message && <p>Message must be longer than 120 characters!</p>}

      <Button content="Send" className="small_button" />
    </form>
  );
}
