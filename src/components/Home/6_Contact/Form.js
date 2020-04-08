import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Elements/Button/index";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();

  const validateName = (value) => {
    if (value.includes(" ") || !/^[a-zA-Z]+$/.test(value)) {
      return false;
    }
    return true;
  };

  const addSuccessMessage = () =>
    new Promise((resolve, reject) => {
      const container = document.querySelector(".contact_content");
      if (!document.querySelector(".success_message")) {
        const success = document.createElement("p");
        success.classList.add("success_message");
        success.innerText =
          "Message successfully sent! We will contact you soon";
        container.insertBefore(success, container.childNodes[1]);
        resolve(success);
      }
    });

  const removeSuccessMessge = (successMessage) => {
    if (successMessage) {
      setTimeout(() => {
        successMessage.parentNode.removeChild(successMessage);
      }, 5000);
    }
  };

  const onSubmit = (data) => {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        const inputs = document.querySelectorAll("#input");
        inputs.forEach((input) => (input.value = ""));
        addSuccessMessage().then((success) => removeSuccessMessge(success));
      }
    });
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
            <p>Name can contain letters only!</p>
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
        ref={register({ required: true, minLength: 120 })}
      ></textarea>
      {errors.message && <p>Message must be longer than 120 characters!</p>}

      <Button content="Send" className="small_button" />
    </form>
  );
}
