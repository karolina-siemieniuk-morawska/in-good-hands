import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Elements/Button/index";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();

  const validateName = (value) => {
    if (value.includes(" ") || value === /[a-zA-Z]+/g) {
      // jak walidować tylko litery bez znaków i cyfr?
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
    console.log(data);

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response.json());
    });

    // if(response.[[PromiseValue]].status === "success") {    // jak wyświetlić wiadomość o sukcesie dopiero po odpowiedzi z serwera
    //   const inputs = document.querySelectorAll("#input");
    //   inputs.forEach((input) => (input.value = ""));
    //   addSuccessMessage().then((success) => removeSuccessMessge(success));
    // } else (
    //   return "Message wasn't sent"
    // )
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
            defaultValue="Karolina"
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
            defaultValue="karolinajustynska@o2.pl"
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
        defaultValue="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      ></textarea>
      {errors.message && <p>Message must be longer than 120 characters!</p>}

      <Button content="Send" className="small_button" />
    </form>
  );
}
