import React, { useState } from "react";
import Title from "../../Elements/Title/index";
import instagram from "../../../assets/Instagram.svg";
import facebook from "../../../assets/Facebook.svg";
import "./style.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = event => {
    setName(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="contact">
      <div className="contact_content">
        <Title content="Contact us" />
        <form>
          <div className="name_email">
            <label>
              Your name:
              <input
                type="text"
                placeholder="John"
                value={name}
                onChange={handleName}
              />
            </label>
            <label>
              Your e-mail:
              <input
                type="email"
                placeholder="john@gmail.com"
                value={email}
                onChange={handleEmail}
              />
            </label>
          </div>
          <label>Your message:</label>
          <textarea placeholder="Hi! I'd like to ask..."></textarea>
          <input className="button small_button" type="submit" value="Send" />
        </form>
      </div>

      <div className="social-media">
        <a href="https://www.instagram.com/?hl=pl">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
}
